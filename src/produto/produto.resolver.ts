import { Resolver, Query, Mutation, Args, Int} from "@nestjs/graphql";
import { ProdutoService } from "./produto.service";
import { CreateProdutoInput } from "./dto/create-produto.input";
import { Produto } from "./produto.entity";

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

}