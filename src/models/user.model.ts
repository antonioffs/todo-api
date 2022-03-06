import { IsNotEmpty, IsString } from "class-validator";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Todo } from "./todo.model";

@Table
export class User extends Model<User>{

    @IsNotEmpty({
        message: "Name must be informed"
    })
    @IsString()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @IsNotEmpty({
        message: "Username must be informed"
    })
    @IsString()
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    username: string;

    @HasMany(() => Todo)
    todos: Todo[]

}