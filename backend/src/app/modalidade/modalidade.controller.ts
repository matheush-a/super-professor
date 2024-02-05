import { Controller, Get } from '@nestjs/common';

@Controller('modalidade')
export class ModalidadeController {
  @Get()
  findAll(): string {
    return 'Isto retorna todas as modalidades';
  }
}