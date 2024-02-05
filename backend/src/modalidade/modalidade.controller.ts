import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';

@Controller('modalidade')
export class ModalidadeController {
  constructor(private readonly modalidadeService: ModalidadeService) {}

  @Get()
  findAll() {
    return this.modalidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalidadeService.findOne(+id);
  }
}
