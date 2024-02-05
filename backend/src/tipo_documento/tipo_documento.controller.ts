import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDocumentoService } from './tipo_documento.service';


@Controller('tipo-documento')
export class TipoDocumentoController {
  constructor(private readonly tipoDocumentoService: TipoDocumentoService) {}

  @Get()
  findAll() {
    return this.tipoDocumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDocumentoService.findOne(+id);
  }
}
