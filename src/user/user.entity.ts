import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { hash, compare } from "bcryptjs";

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
        default: 1
    })
    @Field(type => Int)
    active: number;


    //Hash da senha sera necessario? Marcello Fontes 02/09/2023
    @BeforeInsert()
    public async hashPassword() {
      this.password = await hash(this.password, 10);
    }


}