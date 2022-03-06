import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Injectable()
export class UserService{

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ){ }

    async getUser(username: string): Promise<User>{
        return this.userModel.findOne({
            where: {
                username: username
            }
        })
    }

    async createUser(body: User) {
        this.userModel.create(body);
    }
}