import { Inject, Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';
import { Pet } from 'src/pets/pet.entity';
import { CreatePetInput } from 'src/pets/dto/create-pet.input';
// import { Pet } from 'src/pets/pet.entity';
// import { Pet } from 'src/pets/pet.entity';

@Injectable()
export class OwnersService {

  constructor(
    @Inject('OWNER_REPOSITORY')
    private ownerRepository: Repository<Owner>,
  ) {}


  async findAll(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }

  createOwner(createOwnerInput: CreateOwnerInput):Promise<Owner>{
    const  newOwner = this.ownerRepository.create(createOwnerInput);

    return this.ownerRepository.save(newOwner);
  }


  findOne(id: number):Promise<Owner>{

    return this.ownerRepository.findOneByOrFail({id});
    
}
}
