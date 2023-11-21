import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { petProvider } from './pet.provider';
import { PetService } from './pet.service';
import { PetsResolver } from './pet.resolver';
import { OwnersModule } from '../owners/owners.module';

@Module({
  imports: [DatabaseModule,OwnersModule],
  providers: [...petProvider, PetService, PetsResolver],
})
export class PetModule {}
