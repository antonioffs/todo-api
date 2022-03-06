import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "src/models/todo.model";

@Injectable()
export class TodoService{

    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo
    ){ }

    async getAllTodo(): Promise<Todo[]>{
        return this.todoModel.findAll()
    }

    async createTodo(body: Todo) {
        this.todoModel.create(body);
    }
}