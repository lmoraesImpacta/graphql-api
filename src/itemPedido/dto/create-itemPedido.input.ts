import { Field, Float, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CreateItemPedidoInput{


    @Field(type => Int)
    quantity:number;

    @Field(type => Float)
    totalValue: number;

    @Field(type => Float)
    uniqueValue: number;

    @Field(type => Int)
    pedidoId: number;
  
    @Field(type => Int)
    produtoId: number;

}