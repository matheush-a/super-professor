import { Module } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service';
import { TipoCursoController } from './tipo_curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCurso } from './entities/tipo_curso.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TipoCurso
    ])
  ],
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
})
export class TipoCursoModule {}
