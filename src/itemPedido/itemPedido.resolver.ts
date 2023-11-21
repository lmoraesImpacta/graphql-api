import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { ItemPedido } from "./itemPedido.entity";
import { ItemPedidoService } from "./itemPedido.service";
import { CreateItemPedidoInput } from "./dto/create-itemPedido.input";


@Resolver(of => ItemPedido)
export class ItemPedidoResolver{

    constructor(private itemPedidoService: ItemPedidoService){}

    @Query(returns => [ItemPedido])
    itemPedidos(): Promise<ItemPedido[]>{
        return this.itemPedidoService.findAll();
    }

    @Mutation(returns => ItemPedido)
    createItemPedido(@Args('createItemPedidoInput')createItemPedidoInput: CreateItemPedidoInput): Promise<ItemPedido>{
        return this.itemPedidoService.createItemPedido(createItemPedidoInput);
    }

}