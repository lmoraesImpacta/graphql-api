import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { Pedido } from "./pedido.entity";
import { PedidoService } from "./pedido.service";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { CreateItensPedidoInput } from "./dto/create-itens-pedido.input";

@Resolver(of => Pedido)
export class PedidoResolver{

    constructor(private pedidoService: PedidoService){}

    @Query(returns => [Pedido])
    pedidos(): Promise<Pedido[]>{
        return this.pedidoService.findAll();
    }


    @Mutation(returns => [Pedido])
    createPedido(
        @Args('createPedidoInput')createPedidoInput: CreatePedidoInput,
        // @Args('createItensPedidoInput')createItensPedidoInput: CreateItensPedidoInput)
        ): Promise<Pedido[]>{
        return this.pedidoService.createPedido(createPedidoInput);
    }

}