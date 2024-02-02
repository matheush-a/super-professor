import { Controller, Get } from '@nestjs/common';

@Controller('curso')
export class CursoController {
  @Get()
  findAll(): string {
    return 'Isto retorna todas os cursos';
  }
}