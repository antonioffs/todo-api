import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Todo } from "src/models/todo.model";
import { TodoService } from "src/services/todo.service";


@Controller('todo')
export class TodoController{

    constructor(private todoService: TodoService){

    }

    // @Get(':username')
    // async getUser(@Param() params): Promise<Todo>{
    //     return this.todoService.getUser(params.username)
    // }

    @Post()
    async createUser(@Body() body: Todo) {
        return this.todoService.createTodo(body);
    }

}