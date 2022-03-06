import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "src/models/todo.model";
import { UserService } from "./user.service";

@Injectable()
export class TodoService{

    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo
    ){ }

    // async getAllTodo(username: string): Promise<Todo>{
        // return this.todoModel.findOne({
        //     where: {
        //         username: username
        //     },
        //     raw: true,
        // })
    // }

    async createTodo(body: Todo) {
        this.todoModel.create(body);
    }
}