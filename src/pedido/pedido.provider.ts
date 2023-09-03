import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";


export const pedidoProvider = [
    {
      provide: 'PEDIDO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Pedido),
      inject: ['DATA_SOURCE'],
    },
  ];
  