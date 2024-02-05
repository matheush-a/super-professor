import { Injectable } from '@nestjs/common';
import { Modalidade } from './interfaces/modalidade.interface';

@Injectable()
export class ModalidadeService {
  private readonly modalidades: Modalidade[] = [];

  create(modalidade: Modalidade) {
    this.modalidades.push(modalidade);
  }

  findAll(): Modalidade[] {
    return this.modalidades;
  }
}