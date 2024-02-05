import { Injectable } from '@nestjs/common';

@Injectable()
export class CursoService {
  findAll() {
    return `This action returns all curso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }
}
