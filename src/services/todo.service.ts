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

    async getOneTodo(todo_id: number): Promise<Todo>{
        return this.todoModel.findByPk(todo_id)
    }

    async createTodo(body: Todo) {
        this.todoModel.create(body);
    }
}