import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { Produto } from "src/produto/produto.entity";
import { CreateItensPedidoInput } from "./dto/create-itens-pedido.input";

@Injectable()
export class PedidoService{

    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>,

        // @Inject('PRODUTO_REPOSITORY')
        // private produtoRepository: Repository<Produto>
    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    async createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{

        const newPedido = this.pedidoRepository.create(createPedidoInput);

        //insere e pega o id inserido MArcello Fonte 19/09/2023
        let lastPedidoId = (await this.pedidoRepository.insert(newPedido)).generatedMaps[0];

        return newPedido;



    }

    // async adicionaItemAoPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{
    //     const  newPedido = this.pedidoRepository.create(createPedidoInput);

    //     const itemPedido = idProd Qtd, idPedido

    //     const

    //     const data = [createPedidoInput.userId]

    //     const produtos = this.produtoRepository.query('SELECT * FROM  WHERE produtoId IN '  data)
    //     /*

    //      {
    //         usrId 123
    //         dtInsert 1212
    //         produto{
    //             {
    //                 id3:
    //                 qtd: 3
    //             }
    //             {
    //                 id4:
    //                 qtd: 4
    //             }
    //         }
    //      }
    //     */
    //     return this.pedidoRepository.save(newPedido);
    // }


    // updateServico


}