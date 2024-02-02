import { Injectable } from '@nestjs/common';
import { Curso } from './interfaces/curso.interface';

@Injectable()
export class CursoService {
  private readonly cursos: Curso[] = [];

  create(curso: Curso) {
    this.cursos.push(curso);
  }

  findAll(): Curso[] {
    return this.cursos;
  }
}