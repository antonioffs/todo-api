import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { APP_FILTER } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { FilterExceptions } from './common/filter/FilterExceptions';
import { TodoController } from './controllers/todo.controller';
import { UserController } from './controllers/user.controller';
import { UserTodoController } from './controllers/user.todo.controller';
import { Todo } from './models/todo.model';
import { User } from './models/user.model';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';
import { UserTodoService } from './services/user.todo.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'todo',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([User, Todo])
  ],
  controllers: [
    UserController, 
    TodoController, 
    UserTodoController
  ],
  providers: [
    UserService, 
    TodoService, 
    UserTodoService,
    {
      provide: APP_FILTER,
      useClass: FilterExceptions
    },
  ],
})
export class AppModule {}
