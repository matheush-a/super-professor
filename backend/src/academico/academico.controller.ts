import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { AcademicoService } from './academico.service';
import { CreateAcademicoDto } from './dto/create-academico.dto';
import { UpdateAcademicoDto } from './dto/update-academico.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'

@Controller('academico')
export class AcademicoController {
  constructor(private readonly academicoService: AcademicoService) {}

  @Post()
  create(@Body() createAcademicoDto: CreateAcademicoDto) {
    return this.academicoService.create(createAcademicoDto);
  }

  @Get()
  findAll() {
    return this.academicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicoService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('documento', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, cb) => {
        cb(null, `${file?.originalname || file?.name}`)
      }
    }),
  }))
  update(@Param('id') id: string, @Body() updateAcademicoDto: UpdateAcademicoDto, @UploadedFile() file: any) {
    updateAcademicoDto.documento = `files/${file?.originalname || file?.name}`;
    return this.academicoService.update(+id, updateAcademicoDto);
  }
}
