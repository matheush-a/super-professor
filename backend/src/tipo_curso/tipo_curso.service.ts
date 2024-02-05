import { Injectable } from '@nestjs/common';

@Injectable()
export class TipoCursoService {
  findAll() {
    return `This action returns all tipoCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoCurso`;
  }
}
