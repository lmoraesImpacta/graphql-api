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

    async createPedido(createPedidoInput: CreatePedidoInput, createItensPedidoInput:CreateItensPedidoInput):Promise<Pedido>{

        // interface DadosIniais {
        //     dt_Insert: Date;
        //     userId: number;
        //   }
        // let dadosIniciais: Array<DadosIniais>;  

        // dadosIniciais = [{dt_Insert: createPedidoInput.dt_Insert, userId: createPedidoInput.userId}];

        // let teste = Promise.resolve(dadosIniciais);
        // return createPedidoInput;

        let produtosAdicionados: Array<Produto>;

        const  newPedido = this.pedidoRepository.create(createPedidoInput);


        const ultimoPedido =  this.pedidoRepository.save(newPedido);

        const ultimoPedidoId = (await ultimoPedido).id;

        let  produtos = createItensPedidoInput.produtos;

        let produtosEmArray =  JSON.parse(produtos.toString());

        produtosEmArray.forEach(function (produto) {
            produtosAdicionados.push(produto);
        });

        return ultimoPedido;
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