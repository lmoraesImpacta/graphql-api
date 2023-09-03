import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { produtoProvider } from './produto.provider';
import { ProdutoService } from './produto.service';
import { ProdutoResolver } from './produto.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [...produtoProvider, ProdutoService,ProdutoResolver],
})
export class ProdutoModule {}
