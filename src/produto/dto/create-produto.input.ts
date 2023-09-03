import { Field, Float, InputType, Int } from "@nestjs/graphql";
// import { type } from "os";

@InputType()
export class CreateProdutoInput{
    @Field()
    name: string;

    @Field()
    description: string;

    @Field(type => Float)
    value: number;
}