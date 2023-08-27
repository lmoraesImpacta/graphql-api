import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { PetService } from "./pet.service";
import { Pet } from "./pet.entity";
import { CreatePetInput } from "./dto/create-pet.input";
import {Owner} from "../owners/entities/owner.entity";


@Resolver(of =>Pet)
export class PetsResolver{
    constructor(private petService: PetService){}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petService.findAll()
    }


    @Mutation(returns => Pet)
    createPet(@Args('createPetInput')createPetInput: CreatePetInput): Promise<Pet>{
        return this.petService.createPet(createPetInput);
    }

    @Query(returns => Pet)
    getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet>{
        return this.petService.findOne(id);
    }

    @ResolveField(returns => Owner)
    owner(@Parent() pet: Pet):Promise<Owner>{
        return this.petService.getOwner(pet.ownerId);
    }

}