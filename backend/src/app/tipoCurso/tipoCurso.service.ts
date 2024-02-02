import { Injectable } from '@nestjs/common';
import { TipoCurso} from './interfaces/tipoCurso.interface';

@Injectable()
export class TipoCursoService {
  private readonly tipoCursos: TipoCurso[] = [];

  create(tipoCurso: TipoCurso) {
    this.tipoCursos.push(tipoCurso);
  }

  findAll(): TipoCurso[] {
    return this.tipoCursos;
  }
}