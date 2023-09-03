import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";


export const userProvider = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Pedido),
      inject: ['DATA_SOURCE'],
    },
  ];
  