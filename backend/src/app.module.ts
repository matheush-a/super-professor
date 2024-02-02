import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModalidadeModule } from './app/modalidade/modalidade.module';
import { TipoCursoModule } from './app/tipoCurso/tipoCurso.module';
import { CursoModule } from './app/curso/curso.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    }),
    CursoModule,
    ModalidadeModule,
    TipoCursoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
