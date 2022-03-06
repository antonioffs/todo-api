import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Todo } from "./todo.model";

@Table
export class User extends Model<User>{

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    username: string;

    @HasMany(() => Todo)
    todos: Todo[]

}