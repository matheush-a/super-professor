import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  tipo_curso_id: number;

  @Column()
  modalidade_id: number;
}