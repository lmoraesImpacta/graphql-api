import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';

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


    async updateProduto(id: number, updateProdutoInput: UpdateProdutoInput): Promise<Produto>{
        await  this.produtoRepository.update(id,updateProdutoInput);
        
        return this.produtoRepository.findOneByOrFail({id});

    }

    async deleteProduto(id: number):Promise<Produto[]>{
        await this.produtoRepository.delete(id);

        return this.produtoRepository.find()


    }


}

