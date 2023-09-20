import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PetModule } from './pets/pet.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import {GraphQLJSON} from 'graphql-type-json';
// import { DataSource } from 'typeorm';
import { OwnersModule } from './owners/owners.module';
import { UserModule } from './user/user.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { ItemPedidoModule } from './itemPedido/itemPedido.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // resolvers: { JSON: GraphQLJSON }
    }),
    PetModule,
    OwnersModule,
    UserModule,
    PedidoModule,
    ProdutoModule,
    ItemPedidoModule
  ],
})
export class AppModule {}
