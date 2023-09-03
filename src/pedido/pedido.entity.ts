import { Int,Field, ObjectType } from "@nestjs/graphql"
import { User } from "src/user/user.entity";
// import { type } from "os"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Pedido{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;



    @Column({
        type: "datetime",
        unique: false,
        nullable: false,

    })
    @Field()
    dt_Insert: Date;

    @Column({
        type: "datetime",
        unique: false,
        nullable: true, 
    })
    @Field()
    dt_Conclusion: Date;

    @Column({
        type: "float",
        unique: false,
        nullable: true
    })
    @Field()
    total_Value: number;


    @Column()
    @Field(type => Int)
    userId: number;
    
    @ManyToOne(() => User, user => user.pedidos)
    @Field(type => User)
    user: User

}