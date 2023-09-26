import { Module } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { PedidoResolver } from "./pedido.resolver";
import { DatabaseModule } from "src/database.module";
import { pedidoProvider, produtoProvider } from "./pedido.provider";
import { UserModule } from "src/user/user.module";
import { ItemPedidoModule } from "src/itemPedido/itemPedido.module";
import { ItemPedidoService } from "src/itemPedido/itemPedido.service";
import { ItemPedidoResolver } from "src/itemPedido/itemPedido.resolver";
import { itemPedidoProvider } from "src/itemPedido/itemPedido.provider";
import { ProdutoModule } from "src/produto/produto.module";


@Module({
    imports: [DatabaseModule,UserModule,ItemPedidoModule,ProdutoModule],
    providers: [...pedidoProvider, PedidoService,PedidoResolver,ItemPedidoService, ...itemPedidoProvider, ...produtoProvider],

})
export class PedidoModule {}
