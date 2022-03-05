import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { User } from './models/user.model';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';

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
    SequelizeModule.forFeature([User, ])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
