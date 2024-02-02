import { Module } from '@nestjs/common';
import { TipoCursoController } from './tipoCurso.controller';
import { TipoCursoService } from './tipoCurso.service';

@Module({
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
  exports: [TipoCursoService]
})
export class TipoCursoModule {}