import { Injectable } from '@nestjs/common';

@Injectable()
export class TipoDocumentoService {
  findAll() {
    return `This action returns all tipoDocumento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDocumento`;
  }
}
