import { DataSource } from 'typeorm';
import { Owner } from './entities/owner.entity' ;
// import { Pet } from 'src/pets/pet.entity';

export const ownerProvider = [
    {
      provide: 'OWNER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Owner),
      inject: ['DATA_SOURCE'],
    },
  ];
  