import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCursoModule } from './tipo_curso/tipo_curso.module';
import { ModalidadeModule } from './modalidade/modalidade.module';
import { CursoModule } from './curso/curso.module';
import { TipoDocumentoModule } from './tipo_documento/tipo_documento.module';
import { AcademicoModule } from './academico/academico.module';
import { MulterModule } from '@nestjs/platform-express';

const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configService.getOrThrow('MYSQL_HOST'),
      port: configService.getOrThrow('MYSQL_PORT'),
      username: configService.getOrThrow('MYSQL_USERNAME'),
      password: configService.getOrThrow('MYSQL_PASSWORD'),
      database: configService.getOrThrow('MYSQL_DATABASE'),
      entities: ['dist/**/*.entity.**'],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './files',
    }),
    CursoModule,
    ModalidadeModule,
    TipoCursoModule,
    TipoDocumentoModule,
    AcademicoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
