import { Body, Controller, Post } from "@nestjs/common";
import { User } from "src/models/user.model";
import { UserService } from "src/services/user.service";


@Controller('user')
export class UserController{

    constructor(private userService: UserService){

    }

    @Post()
    async createUser(@Body() body: User) {
        return this.userService.createUser(body);
    }

}