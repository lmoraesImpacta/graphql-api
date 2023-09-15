import { Field, InputType, Int } from "@nestjs/graphql";
import {GraphQLJSON} from 'graphql-type-json';
import { User } from "src/user/user.entity";


@InputType()
export class CreatePedidoInput{

    @Field()
    dt_Insert: Date;

    @Field(type=> Int)
    userId: number;





}