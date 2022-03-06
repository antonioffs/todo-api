import { Body, Controller, Delete, Get, Param, Put, Req } from "@nestjs/common";
import { Todo } from "src/models/todo.model";
import { UserTodoService } from "src/services/user.todo.service";


@Controller('userstodo')
export class UserTodoController{

    constructor( private userTodoService: UserTodoService){

    }

    @Get()
    async getAllTodosOfUser(@Req() req): Promise<Todo[]>{
        return this.userTodoService.getAllTodosOfUser(req.headers['user_id'])
    }

    @Get(':todo_id')    
    async getOneTodo(@Param() params, @Req() req): Promise<Todo>{
        return this.userTodoService.getOneTodoOfUser(req.headers['user_id'], params.todo_id)
    }

    @Put(':todo_id')
    async updateTudoOfUser(@Body() body: Todo, @Req() req){
        return this.userTodoService.updateTudoOfUser(req.headers['user_id'], body)
    }

    @Delete(':todo_id')
    async deleteTodoOfUser(@Param() params, @Req() req){
        return this.userTodoService.deleteTodoOfUser(req.headers['user_id'], params.todo_id)
    }
}