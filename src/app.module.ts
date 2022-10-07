import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password:'rootroot',
      database: 'db_blogpessoas',
      entities[],
      synchrozine: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
