import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DeleteUserInput } from './dto/delete-user.input';


@Injectable()
export class UserService{
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>

    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    createUser(createUserInput: CreateUserInput): Promise<User>{
        const newUser = this.userRepository.create(createUserInput);

        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateUserInput: UpdateUserInput):Promise<User>{

        //Atualiza o usuario pelo id e o input Marcello Fontes 03/09/2023
        //Obs coloquei async para poder usar o await Marcello Fontes 03/09/2023
        await  this.userRepository.update(id,updateUserInput);

        //Retorna usuario atualizado Marcello Fontes 03/09/2023
        return this.userRepository.findOneByOrFail({id});
    }

    async deleteUser(id: number, deleteUserInput: DeleteUserInput):Promise<User>{

        //Atualizao o active para zero pois a ideia é não deletar em si da tabela sim desativar
        await this.userRepository.update(id,deleteUserInput);

        return this.userRepository.findOneByOrFail({id});

    }

    


}

