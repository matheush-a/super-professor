import { Injectable } from '@nestjs/common';
import { CreateAcademicoDto } from './dto/create-academico.dto';
import { UpdateAcademicoDto } from './dto/update-academico.dto';
import { Academico } from './entities/academico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validateUniqueFields } from './validation/academico.validator';

@Injectable()
export class AcademicoService {
  constructor(
    @InjectRepository(Academico)
    private academicoRepository: Repository<Academico>,
  ) {}

  async create(createAcademicoDto: CreateAcademicoDto) {
    const fields = [];
    const userByEmail: Academico[] = await this.byEmail(createAcademicoDto.email);

    if (userByEmail.length) {
      fields.push('Email');
      return validateUniqueFields(fields);
    }

    return this.academicoRepository.save(createAcademicoDto);
  }

  async byEmail(email: string) {
    return this.academicoRepository.find({
      where: {
        email
      }
    })
  }

  async byCpf(cpf: string) {
    return this.academicoRepository.find({
      where: {
        cpf
      }
    })
  }

  findAll() {
    return this.academicoRepository.find({
      relations: {
        tipoDocumento: true,
        curso: true,
      }
    });
  }

  findOne(id: number) {
    return this.academicoRepository.findOneOrFail({ 
      where: { id },
      relations: {
        tipoDocumento: true,
        curso: true,
      }
    });
  }

  async update(id: number, updateAcademicoDto: UpdateAcademicoDto) {
    const fields = [];
    const userByCpf: Academico[] = await this.byCpf(updateAcademicoDto?.cpf);

    if (userByCpf.length) {
      fields.push('CPF');
      return validateUniqueFields(fields);
    }

    return this.academicoRepository.update(id, updateAcademicoDto);
  }
}
