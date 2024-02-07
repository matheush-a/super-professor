import { Injectable } from '@nestjs/common';
import { TipoDocumento } from './entities/tipo_documento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDocumentoService {
  constructor(
    @InjectRepository(TipoDocumento)
    private tipoDocumentoRepository: Repository<TipoDocumento>,
  ) {}

  findAll() {
    return this.tipoDocumentoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDocumento`;
  }
}
