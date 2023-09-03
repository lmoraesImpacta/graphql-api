import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Produto{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field(type => Float)
    value: number;


    @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido)
    @Field(type => [ItemPedido], {nullable: true})
    ItensPedido?: ItemPedido[];

}