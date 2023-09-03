import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";

@Injectable()
export class PedidoService{

    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>
    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{
        const  newPedido = this.pedidoRepository.create(createPedidoInput);

        return this.pedidoRepository.save(newPedido);
    }


}