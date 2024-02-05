import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service';
@Controller('tipo-curso')
export class TipoCursoController {
  constructor(private readonly tipoCursoService: TipoCursoService) {}

  @Get()
  findAll() {
    return this.tipoCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCursoService.findOne(+id);
  }
}
