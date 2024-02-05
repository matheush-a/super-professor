import { Module } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service';
import { TipoCursoController } from './tipo_curso.controller';

@Module({
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
})
export class TipoCursoModule {}
