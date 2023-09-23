import { Injectable, Inject, ConsoleLogger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemPedido } from './itemPedido.entity';
import { CreateItemPedidoInput } from './dto/create-itemPedido.input';
import { ItemPedidoInputTeste } from 'src/pedido/dto/create-pedido.input';


@Injectable()
export class ItemPedidoService{
    constructor(
        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itemPedidoRepository: Repository<ItemPedido>

    ){}

    async findAll(): Promise<ItemPedido[]> {
        return this.itemPedidoRepository.find();
    }

    createItemPedido(createItemPedidoInput: ItemPedidoInputTeste): Promise<ItemPedido>{
        const newItemPedido = this.itemPedidoRepository.create(createItemPedidoInput);

        return this.itemPedidoRepository.save(newItemPedido);
    }

    async calculaValorTotalPorPedido(pedidoId: number){

        try{
            console.log(pedidoId);
            let pernambuco = this.itemPedidoRepository.find({where:{pedidoId : 62}});
            console.log(pernambuco);
        }
        catch(error){
            console.log(error);
        }

    }

    

}

