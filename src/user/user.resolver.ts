import { Resolver, Query, Mutation, Args, Int} from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { DeleteUserInput } from "./dto/delete-user.input";
@Resolver(of => User)
export class UserResolver{

    constructor(private userService: UserService){}

    @Query(returns => [User])
    users(): Promise<User[]>{
        return this.userService.findAll()
    }

    @Mutation(returns => User)
    createUser(
            @Args('createUserInput')
            createUserInput: CreateUserInput
        ):Promise<User>{
        return this.userService.createUser(createUserInput);
    }

    @Mutation(returns => User)
    updateUser(
            @Args('id', {type: () => Int}) id: number,
            @Args('updateUserInput')updateUserInput:UpdateUserInput
        ):Promise<User> {
            return this.userService.updateUser(id,updateUserInput);
    
    }

    @Mutation(returns => User)
    deleteUser(
            @Args('id', {type: () => Int}) id: number,
            @Args('deleteUserInput')deleteUserInput:DeleteUserInput
        ):Promise<User>{
            return this.userService.deleteUser(id,deleteUserInput);
        }
    
}