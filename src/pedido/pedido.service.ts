import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { Produto } from "src/produto/produto.entity";
// import { CreateItensPedidoInput } from "./dto/create-itens-pedido.input";
// import { ItemPedidoService } from "src/itemPedido/itemPedido.service";
import {  ItemPedido } from "src/itemPedido/itemPedido.entity";
import { async } from "rxjs";

@Injectable()
export class PedidoService{

    constructor(

        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>,

        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itemPedidoRepository: Repository<ItemPedido>,

        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<Produto>

    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    async createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{

        const newPedido =  await this.pedidoRepository.create(createPedidoInput);

        let lastPedidoId = (await this.pedidoRepository.insert(newPedido)).generatedMaps[0].id;

        for await  (const item of createPedidoInput.itensDoPedido){
            item.pedidoId = lastPedidoId;
            await this.itemPedidoRepository.save(item);
        }        

        let itens =  await this.itemPedidoRepository.find({ where: {pedidoId :parseInt(lastPedidoId)} });
        var total = 0;
        for await  (const item of itens){
            let produto = await this.produtoRepository.find({ where:{ id: item.produtoId }});
            total = total + (produto[0].value * item.quantity);
        }
        const updatePedido = await this.pedidoRepository.createQueryBuilder()
            .update(Pedido)
            .set({
                total_Value: total
            })
            .where("id = :id", {id: lastPedidoId})
            .execute()
        const pedidoConcluido = this.pedidoRepository.findOneByOrFail({id: lastPedidoId})

        return pedidoConcluido;

    }

}