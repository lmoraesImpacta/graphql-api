import { Field, InputType, Int } from "@nestjs/graphql";
// import { type } from "os";


@InputType()
export class CreatePedidoInput{

    @Field()
    dt_Insert: Date;


    @Field(type=> Int)
    userId: number;



}