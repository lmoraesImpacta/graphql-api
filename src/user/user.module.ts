import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { userProvider } from './user.provider';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, UserService,UserResolver],
})
export class UserModule {}
