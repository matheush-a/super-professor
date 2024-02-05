import { Academico } from 'src/academico/entities/academico.entity';
import { Modalidade } from 'src/modalidade/entities/modalidade.entity';
import { TipoCurso } from 'src/tipo_curso/entities/tipo_curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  parcelas: number;

  @ManyToOne(() => TipoCurso, tipoCurso => tipoCurso.id)
  tipo_curso: TipoCurso;

  @ManyToOne(() => Modalidade, modalidade => modalidade.id)
  modalidade: Modalidade;

  @OneToMany(() => Academico, academico => academico.id)
  academicos: Academico[];
}