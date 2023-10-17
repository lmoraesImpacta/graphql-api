import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DeleteUserInput } from './dto/delete-user.input';
import { hash } from "bcryptjs";

@Injectable()
export class UserService{
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>

    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

   async  createUser(createUserInput: CreateUserInput): Promise<User>{

        let pass = this.hashPassword(createUserInput.password);


        const newUser = this.userRepository.create(createUserInput);

        newUser.password = await pass;
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateUserInput: UpdateUserInput):Promise<User>{

        let pass = this.hashPassword(updateUserInput.password);

        const updateUser = this.userRepository.create(updateUserInput);
        
        updateUser.password = await pass;

        await  this.userRepository.update(id,updateUser);
        
        return this.userRepository.findOneByOrFail({id});
    }

    async deleteUser(id: number, deleteUserInput: DeleteUserInput):Promise<User>{

        const deltedUser = this.userRepository.create(deleteUserInput);

        await this.userRepository.update(id,deltedUser);

        return this.userRepository.findOneByOrFail({id});
    }

     async hashPassword(password: string):Promise<string> {
        password = await hash(password, 10);

        return password;
    }

    


}

