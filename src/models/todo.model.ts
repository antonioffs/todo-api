import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Todo extends Model<Todo>{

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    done: boolean;

    @ForeignKey(() => User)
    @Column({
        allowNull: false,
    })
    user_id: number

    @BelongsTo(() => User)
    user: User
}