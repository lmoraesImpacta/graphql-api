import { DataSource } from "typeorm";
import { ItemPedido } from "./itemPedido.entity";

export const itemPedidoProvider = [
    {
      provide: 'ITEM_PEDIDO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ItemPedido),
      inject: ['DATA_SOURCE'],
    },
  ];
  