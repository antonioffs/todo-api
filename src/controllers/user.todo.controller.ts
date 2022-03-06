import { Controller, Get, Param } from "@nestjs/common";
import { Todo } from "src/models/todo.model";
import { User } from "src/models/user.model";
import { UserTodoService } from "src/services/user.todo.service";


@Controller('user/todo')
export class UserTodoController{

    constructor( private userTodoService: UserTodoService){

    }

    // @Get(':user_id, :todo_id')    
    // async getOneTodo(@Param() params): Promise<Todo>{
    //     console.log()
    //     console.log()        
    //     console.log(params.user_id, params.todo_id)
    //     console.log()
    //     console.log(params)
    //     console.log()
    //     console.log()
    //     return this.userTodoService.getOneTodo(params.user_id, params.todo_id)
    // }

    @Get(':user_id')
    async getAllTodosOfUser(@Param() params): Promise<Todo[]>{
        return this.userTodoService.getAllTodosOfUser(params.user_id)
    }

}