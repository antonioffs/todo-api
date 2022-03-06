import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "src/models/todo.model";
import { User } from "src/models/user.model";

@Injectable()
export class UserTodoService{

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        @InjectModel(Todo)
        private todoModel: typeof Todo,
    ){ }

    // async getOneTodo(user_id: number, todo_id: number): Promise<Todo>{
    //     return this.todoModel.findOne({
    //         where: {
    //             id: todo_id
    //         }
    //     })
    // }

    async getAllTodosOfUser(user_id: number): Promise<Todo[]>{
        return this.todoModel.findAll({
            where: {
                user_id: user_id
            }
        });
    }
        

}