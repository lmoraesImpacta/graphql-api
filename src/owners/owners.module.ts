import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { DatabaseModule } from 'src/database.module';
import { ownerProvider } from './owners.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...ownerProvider, OwnersService, OwnersResolver],
  exports:[OwnersService]
})
export class OwnersModule {}
