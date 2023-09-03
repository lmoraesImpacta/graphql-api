import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { itemPedidoProvider } from "./itemPedido.provider";
import { ItemPedidoResolver } from "./itemPedido.resolver";
import { ItemPedidoService } from "./itemPedido.service";
import { ProdutoModule } from "src/produto/produto.module";
import { PedidoModule } from "src/pedido/pedido.module";

@Module({
    imports: [DatabaseModule,ProdutoModule,PedidoModule],
    providers: [...itemPedidoProvider, ItemPedidoService,ItemPedidoResolver],
  })
export class ItemPedidoModule{}