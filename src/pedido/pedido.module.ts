import { Module } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { PedidoResolver } from "./pedido.resolver";
import { DatabaseModule } from "src/database.module";
import { pedidoProvider } from "./pedido.provider";
import { UserModule } from "src/user/user.module";
import { ItemPedidoModule } from "src/itemPedido/itemPedido.module";
import { ItemPedidoService } from "src/itemPedido/itemPedido.service";
import { ItemPedidoResolver } from "src/itemPedido/itemPedido.resolver";
import { itemPedidoProvider } from "src/itemPedido/itemPedido.provider";


@Module({
    imports: [DatabaseModule,UserModule,ItemPedidoModule],
    providers: [...pedidoProvider, PedidoService,PedidoResolver,ItemPedidoService, ...itemPedidoProvider],

})
export class PedidoModule {}
