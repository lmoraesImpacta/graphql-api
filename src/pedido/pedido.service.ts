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
        public itemPedidoRepository: Repository<ItemPedido>,

        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<Produto>

    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

     async createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{

        //atualiza o pedido
        // const newPedido =  await this.pedidoRepository.insert(createPedidoInput);
        // console.log(newPedido);
        const newPedido =   this.pedidoRepository.create(createPedidoInput);

        console.log(newPedido);
    //     //insere e pega o id inserido MArcello Fonte 19/09/2023
        let lastPedidoId = (await this.pedidoRepository.insert(newPedido)).generatedMaps[0].id;
    // let repository = this.itemPedidoRepository;
    // //     //Loopa todos os produtos do pedido adiciona o id do pedido casdastrado Marcello Fontes 22/09/2023
    // console.log(this.itemPedidoRepository);   
    await  createPedidoInput.itensDoPedido.forEach( async function (item) {

            //Pegao o pedido id de item a e vai adicioonado no input
            item.pedidoId = lastPedidoId;

            console.log(item.pedidoId);
            //Insere item pedido a tabela item pedido

        //    await  this.itemPedidoRepository.insert(item);
        //    console.log(this.itemPedidoRepository);
        });
        let pernambuco =  await this.itemPedidoRepository.find({where:{pedidoId : parseInt(lastPedidoId)}});
    //     console.log(pernambuco);

    //     // parseInt(lastPedidoId.id)


    //     return newPedido;
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