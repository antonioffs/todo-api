import { Body, Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Todo } from "src/models/todo.model";
import { TodoService } from "src/services/todo.service";

@ApiTags('To Do')
@Controller('todo')
export class TodoController{

    constructor(private todoService: TodoService){

    }
    @ApiOperation({ summary: 'Get all To Do'})
    @ApiResponse({
        status: 200,
        type: Todo,
        isArray: true
     })
    @Get()
    async getAllTodo(): Promise<Todo[]>{
        return this.todoService.getAllTodo()
    }
    
}