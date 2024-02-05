import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  findAll() {
    return this.cursoRepository.find({
      relations: {
        tipo_curso: true,
        modalidade: true,
      }
    })
  }

  findOne(id: number) {
    return this.cursoRepository.findOneOrFail({ 
      where: { id },
      relations: {
        tipo_curso: true,
        modalidade: true,
      }
    });
  }
}
