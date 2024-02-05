import { Curso } from 'src/curso/entities/curso.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Modalidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Curso, curso => curso.id)
  cursos: Curso[];
}