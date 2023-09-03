import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class ItemPedido{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => Int)
    quantity: number;
    
    @Column({
        type: "float",
        unique: false,
        nullable: true
    })
    @Field()
    totalValue: number;

    @Column({
        type: "float",
        unique: false,
        nullable: true
    })
    @Field()
    uniqueValue: number;

    @Column()
    @Field(type => Int)
    pedidoId: number;
  
    @ManyToOne(() => Pedido, pedido => pedido.ItensPedido)
    @Field(type => Pedido)
    pedido: Pedido;

    @Column()
    @Field(type => Int)
    produtoId: number;

    @ManyToOne(() => Produto, produto => produto.ItensPedido)
    @Field(type => Produto)
    produto: Produto;


  }


