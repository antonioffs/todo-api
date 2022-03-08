import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { APP_FILTER } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { FilterExceptions } from './common/filter/FilterExceptions';
import { AppController } from './controllers/app.controller';
import { TodoController } from './controllers/todo.controller';
import { UserController } from './controllers/user.controller';
import { UserTodoController } from './controllers/user.todo.controller';
import { Todo } from './models/todo.model';
import { User } from './models/user.model';
import { AppService } from './services/app.service';
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
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.DB_USE_DATABASE,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([User, Todo])
  ],
  controllers: [
    AppController, 
    UserController, 
    TodoController, 
    UserTodoController
  ],
  providers: [
    AppService, 
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
