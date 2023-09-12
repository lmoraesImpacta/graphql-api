import { Resolver, Query, Mutation, Args, Int} from "@nestjs/graphql";
import { ProdutoService } from "./produto.service";
import { CreateProdutoInput } from "./dto/create-produto.input";
import { Produto } from "./produto.entity";
import { UpdateProdutoInput } from "./dto/update-produto.input";

@Resolver(of => Produto)
export class ProdutoResolver{

    constructor(private produtoService: ProdutoService){}

    @Query(returns => [Produto])
    produtos(): Promise<Produto[]>{
        return this.produtoService.findAll()
    }

    @Mutation(returns => Produto)
    createProduto(@Args('createProdutoInput')createProdutoInput: CreateProdutoInput):Promise<Produto>{
        return this.produtoService.createProduto(createProdutoInput);
    }

    @Mutation(returns => Produto)
    updateProduto(
            @Args('id', {type: () => Int}) id: number,
            @Args('updateProdutoInput')updateProdutoInput:UpdateProdutoInput
        ):Promise<Produto> {
            return this.produtoService.updateProduto(id,updateProdutoInput);
    
    }

    @Mutation(returns => [Produto])
    deleteProduto(
            @Args('id', {type: () => Int}) id: number,
        ):Promise<Produto[]>{
            return this.produtoService.deleteProduto(id);
        }

}