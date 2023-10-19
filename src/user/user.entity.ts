import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from "bcryptjs";
import { Pedido } from 'src/pedido/pedido.entity';

@ObjectType()
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({
        type: "varchar",
        length: 255,
        unique: false,
        nullable: false
    })
    @Field()
    name: string;

    @Column({
        type: "varchar",
        length: 255,
        unique: true,
        nullable: false
    })
    @Field()
    email: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: false,
        nullable: false
    })
    @Field()
    password: string;

    @Column({
        type: "bit",
        unique: false,
        nullable: false,
    })
    @Field(type => Int)
    active: number;

    @OneToMany(() => Pedido, pedido => pedido.user)
    @Field(type => [Pedido], {nullable: true})
    pedidos?: Pedido[];

}