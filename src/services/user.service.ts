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
        try{
            return this.userModel.findOne({
                where: {
                    username: username
                }
            })
        }catch{
            throw new Error()
        }
    }

    async createUser(body: User) {
        try{
            return this.userModel.create(body);
        }catch{
            throw new Error()
        }
    }
}