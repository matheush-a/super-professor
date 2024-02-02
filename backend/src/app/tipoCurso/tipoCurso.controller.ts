import { Controller, Get } from '@nestjs/common';

@Controller('tipoCurso')
export class TipoCursoController {
  @Get()
  findAll(): string {
    return 'Isto retorna todas os tipos de curso';
  }
}