import { Field, InputType, Int } from "@nestjs/graphql";
// import {GraphQLJSON} from 'graphql-type-json';
import { User } from "src/user/user.entity";


@InputType()
export class CreatePedidoInput{

    @Field()
    dt_Insert: Date;

    @Field(type=> Int)
    user_id: number;

    @Field(() => [ItemPedidoInputTeste])
    itensDoPedido: ItemPedidoInputTeste[]

}

@InputType()
export class ItemPedidoInputTeste{

    @Field(type=> Int)
    pedidoId:number;

    @Field(type=> Int)
    produtoId:number;

    @Field(type => Int)
    quantity:number;


}