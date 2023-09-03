import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CreatePedidoInput{

    @Field()
    dt_Insert: Date;

    @Field(type=> Int)
    userId: number;

}