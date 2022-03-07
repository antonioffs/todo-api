import { ApiHideProperty, ApiParam, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Todo } from "./todo.model";

@Table
export class User extends Model<User>{

    @ApiProperty({
        example: "John", 
        description: 'Name of user' 
    })
    @IsNotEmpty({
        message: "Name must not be empty"
    })
    @IsString()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;


    @ApiProperty({ 
        example: "johndoe", 
        description: 'Username of user',
        type: String,
    })
    @IsNotEmpty({
        message: "Username must not be empty"
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
