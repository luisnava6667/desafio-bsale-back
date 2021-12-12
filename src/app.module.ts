import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './models/category';
import { Product } from './models/product';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        Product,
        Category
      ],
      synchronize: false,
      logging: ['query']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}