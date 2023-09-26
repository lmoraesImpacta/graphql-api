import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { Produto } from "src/produto/produto.entity";


export const pedidoProvider = [
    {
      provide: 'PEDIDO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Pedido),
      inject: ['DATA_SOURCE'],
    },
  ];

  export const itemPedidoProvider = [
    {
      provide: 'ITEM_PEDIDO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ItemPedido),
      inject: ['DATA_SOURCE'],
    },
  ];

  export const produtoProvider = [
    {
      provide: 'PRODUTO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Produto),
      inject: ['DATA_SOURCE'],
    },
  ];
  
  