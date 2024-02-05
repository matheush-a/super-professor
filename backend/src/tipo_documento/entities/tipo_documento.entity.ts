import { Academico } from 'src/academico/entities/academico.entity';
import { Curso } from 'src/curso/entities/curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Curso, curso => curso.id)
  cursos: Curso[];

  @OneToMany(() => Academico, academico => academico.id)
  academicos: Academico[];
}