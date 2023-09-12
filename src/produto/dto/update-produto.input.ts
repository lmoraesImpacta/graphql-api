import { Field, Float, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateProdutoInput } from "./create-produto.input";
// import { type } from "os";

@InputType()
export class UpdateProdutoInput extends PartialType(CreateProdutoInput){

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(type => Float)
    value: number;
}