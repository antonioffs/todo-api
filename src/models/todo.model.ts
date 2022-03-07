import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Todo extends Model<Todo>{

    @ApiProperty({
        example: "Wash the dishes", 
        description: 'Title of To Do' 
    })
    @IsNotEmpty({
        message: "Title must not be empty"
    })
    @IsString()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: false, 
        description: 'Status of the To Do' 
    })
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    done: boolean;

    // @ApiProperty({
    //     example: 1, 
    //     description: 'User owner of To Do' 
    // })
    @ForeignKey(() => User)
    @Column({
        allowNull: false,
    })
    user_id: number

    @BelongsTo(() => User)
    user: User

    // @ApiHideProperty()
    // @ApiProperty({ example: 1, description: 'User ID, Auto increment',})
    // id: number;

    // @ApiHideProperty()
    // @ApiProperty({ example: "2022-03-06T23:01:53.182Z", description: 'Last updated date' })
    // updatedAt: "2022-03-06T23:01:53.182Z";

    // @ApiHideProperty()
    // @ApiProperty({ example: "2022-03-06T23:01:53.182Z", description: 'Created date' })
    // createdAt: "2022-03-06T23:01:53.182Z";
}