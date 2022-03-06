import { Body, Controller, Get, Post } from "@nestjs/common";
import { Todo } from "src/models/todo.model";
import { TodoService } from "src/services/todo.service";


@Controller('todo')
export class TodoController{

    constructor(private todoService: TodoService){

    }

    @Get()
    async getAllTodo(): Promise<Todo[]>{
        return this.todoService.getAllTodo()
    }

    @Post()
    async createUser(@Body() body: Todo) {
        return this.todoService.createTodo(body);
    }

}