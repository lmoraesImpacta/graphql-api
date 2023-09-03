import { InputType, PartialType, Field, Int } from "@nestjs/graphql";

import { CreateUserInput } from "./create-user.input";
// import { type } from "os";

@InputType()
export class DeleteUserInput extends PartialType(CreateUserInput) {
    @Field(type => Int)
    active: number;
    
}
