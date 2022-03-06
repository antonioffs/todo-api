import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "src/models/user.model";
import { UserService } from "src/services/user.service";


@Controller('user')
export class UserController{

    constructor(private userService: UserService){

    }

    @Get(':username')
    async getUser(@Param() params): Promise<User>{
        return this.userService.getUser(params.username)
    }

    @Post()
    async createUser(@Body() body: User) {
        return this.userService.createUser(body);
    }

}