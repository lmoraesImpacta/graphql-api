import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { Produto } from "src/produto/produto.entity";
import { CreateItensPedidoInput } from "./dto/create-itens-pedido.input";
import { ItemPedidoService } from "src/itemPedido/itemPedido.service";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";

@Injectable()
export class PedidoService{

    constructor(

        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>,

        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itemPedidoRepository: Repository<ItemPedido>


    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    async createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{

        const newPedido = this.pedidoRepository.create(createPedidoInput);

        //insere e pega o id inserido MArcello Fonte 19/09/2023
        let lastPedidoId = (await this.pedidoRepository.insert(newPedido)).generatedMaps[0];

        //Instanciando o item pedido repository fora por que dentro do foreach não cosnegui  Marcello Fontes 22/09/2023
        let itemPedidoRepo = this.itemPedidoRepository;

        //Instaciando a service fora pelo mesmo motivo Marcello Fontes 22/09/2023

        let itemPedidoService = new ItemPedidoService(itemPedidoRepo);

        //Loopa todos os produtos do pedido adiciona o id do pedido casdastrado Marcello Fontes 22/09/2023
        createPedidoInput.itensDoPedido.forEach(function (item) {

            //Pegao o pedido id de item a e vai adicioonado no input
            item.pedidoId = lastPedidoId.id;

            //Insere item pedido a tabela item pedido
            itemPedidoService.createItemPedido(item);


            // this.itemPedidoRepository.createItemPedido(item);
        });

        // console.log(createPedidoInput);
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