import { Injectable } from '@nestjs/common';

@Injectable()
export class ModalidadeService {
  findAll() {
    return `This action returns all modalidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modalidade`;
  }
}
