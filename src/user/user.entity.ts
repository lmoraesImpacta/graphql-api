import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { hash, compare } from "bcryptjs";
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


    //Hash da senha sera necessario? Marcello Fontes 02/09/2023
    @BeforeInsert()
    public async hashPassword() {
      this.password = await hash(this.password, 10);
    }


}