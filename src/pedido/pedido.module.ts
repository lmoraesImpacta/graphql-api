import { Module } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { PedidoResolver } from "./pedido.resolver";
import { DatabaseModule } from "src/database.module";
import { pedidoProvider } from "./pedido.provider";
import { UserModule } from "src/user/user.module";


@Module({
    imports: [DatabaseModule,UserModule],
    providers: [...pedidoProvider, PedidoService,PedidoResolver],

})
export class PedidoModule {}
