import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserInput{

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
    
    @Field(type => Int)
    active: number;

}