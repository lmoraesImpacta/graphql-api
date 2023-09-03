import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemPedido } from './itemPedido.entity';
import { CreateItemPedidoInput } from './dto/create-itemPedido.input';


@Injectable()
export class ItemPedidoService{
    constructor(
        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itemPedidoRepository: Repository<ItemPedido>

    ){}

    async findAll(): Promise<ItemPedido[]> {
        return this.itemPedidoRepository.find();
    }

    
    createItemPedido(createItemPedidoInput: CreateItemPedidoInput): Promise<ItemPedido>{
        const newItemPedido = this.itemPedidoRepository.create(createItemPedidoInput);

        return this.itemPedidoRepository.save(newItemPedido);
    }



    


}

