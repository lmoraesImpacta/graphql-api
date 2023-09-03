import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CreateProdutoInput } from './dto/create-produto.input';


@Injectable()
export class ProdutoService{
    constructor(
        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<Produto>

    ){}

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find();
    }

    
    createProduto(createProdutoInput: CreateProdutoInput): Promise<Produto>{
        const newProduct = this.produtoRepository.create(createProdutoInput);

        return this.produtoRepository.save(newProduct);
    }


}

