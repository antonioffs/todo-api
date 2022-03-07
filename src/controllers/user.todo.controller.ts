import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { Todo } from "src/models/todo.model";
import { UserTodoService } from "src/services/user.todo.service";
import internal from "stream";

@ApiTags('Users-Todo')
@Controller('userstodo')
export class UserTodoController{

    constructor( private userTodoService: UserTodoService){

    }

    @ApiOperation({ 
        summary: "Get all user's to do"
    })
    @ApiHeader({
        name: 'user_id',
        required: true,
        description: 'User id used to retrieve the all To Do', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @Get()
    async getAllTodosOfUser(@Req() req): Promise<Todo[]>{
        return this.userTodoService.getAllTodosOfUser(req.headers['user_id'])
    }


    @ApiOperation({ 
        summary: "Get one user's to do"
    })
    @ApiHeader({
        name: 'user_id',
        required: true,
        description: 'User id used to retrieve the one To Do', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @ApiParam({
        name: 'todo_id',
        required: true,
        description: 'To Do to be retrieved', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @Get(':todo_id')    
    async getOneTodo(@Param() params, @Req() req): Promise<Todo>{
        return this.userTodoService.getOneTodoOfUser(req.headers['user_id'], params.todo_id)
    }


    @ApiOperation({ 
        summary: "Create a new To Do"
    })
    @ApiHeader({
        name: 'user_id',
        required: true,
        description: 'User id used to create a new To Do', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @Post()    
    async createTodoOfUser(@Body() todo: Todo, @Req() req){
        return this.userTodoService.createTodoOfUser(req.headers['user_id'], todo)
    }


    @ApiOperation({ 
        summary: "Update a user's to do"
    })
    @ApiHeader({
        name: 'user_id',
        required: true,
        description: 'User id owner the To Do', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @ApiParam({
        name: 'todo_id',
        required: true,
        description: 'To Do to be Updated', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @Put(':todo_id')
    async updateTudoOfUser(@Param() params, @Body() body: Todo, @Req() req){
        return this.userTodoService.updateTudoOfUser(req.headers['user_id'], params.todo_id, body)
    }


    @ApiOperation({ 
        summary: "Delete a user's to do"
    })
    @ApiHeader({
        name: 'user_id',
        required: true,
        description: 'User id owner the To Do', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @ApiParam({
        name: 'todo_id',
        required: true,
        description: 'To Do to be Updated', 
        schema: { 
            oneOf: [{
                type: 'int'
            }]
        }
    })
    @Delete(':todo_id')
    async deleteTodoOfUser(@Param() params, @Req() req){
        return this.userTodoService.deleteTodoOfUser(req.headers['user_id'], params.todo_id)
    }
}