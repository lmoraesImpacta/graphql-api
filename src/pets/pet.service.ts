import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';


@Injectable()
export class PetService {
  constructor(
    @Inject('PET_REPOSITORY')
    private petRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  createPet(createPetInput: CreatePetInput):Promise<Pet>{
    const  newPet = this.petRepository.create(createPetInput);

    return this.petRepository.save(newPet);
  }

   findOne(id: number):Promise<Pet>{

    return this.petRepository.findOneByOrFail({id});
    
}

    getOwner(ownerId: number):Promise<Owner>{
        return this.ownerService.findOne(ownerId);
    }

}