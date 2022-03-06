import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "src/models/todo.model";
import { User } from "src/models/user.model";

@Injectable()
export class UserTodoService{

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        @InjectModel(Todo)
        private todoModel: typeof Todo,
    ){ }

    async userExists(user_id: number){
        return this.userModel.findByPk(user_id)
    }

    async getAllTodosOfUser(user_id: number): Promise<Todo[]>{
        return this.todoModel.findAll({
            where: {
                user_id: user_id
            }
        });
    }
     
    async getOneTodoOfUser(user_id: number, todo_id: number): Promise<Todo>{
        if(await this.userExists(user_id)){
            return this.todoModel.findOne({
                where: {
                    id: todo_id,
                    user_id: user_id                  
                }
            })
        }else{
            return
        }
    }

    async updateTudoOfUser(user_id: number, todo: Todo){
        if(await this.userExists(user_id)){
            return this.todoModel.update(todo, {
                where: {
                    id: todo.id
                }
            })
        }else{
            return
        }
    }
        
    async deleteTodoOfUser(user_id: number, todo_id: number){
        if(await this.userExists(user_id)){
            const todo = await this.getOneTodoOfUser(user_id, todo_id)
            todo.destroy()
        }else{
            return
        }
    }
}