import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "src/models/user.model";
import { UserService } from "src/services/user.service";

@ApiTags('User')
@Controller('user')
export class UserController{

    constructor(private userService: UserService){

    }
    @ApiParam({
        name: 'username',
        required: true,
        description: 'Username to be retrieved', 
        schema: { 
            oneOf: [{
                type: 'string'
            }]
        }
    })
    @ApiOperation({ summary: 'Get User details by username'})
    @ApiResponse({
        status: 200,
        type: User
     })
    @Get(':username')
    async getUser(@Param() params): Promise<User>{
        return this.userService.getUser(params.username)
    }


    @ApiBody({
        description: 'List of cats',
        type: User
      })
    @ApiOperation({ summary: 'Create User' })
    @ApiResponse({
        status: 201,
        type: User
     })
    @Post()
    async createUser(@Body() body: User) {
        return this.userService.createUser(body);
    }

}