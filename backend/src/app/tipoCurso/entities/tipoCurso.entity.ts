import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoCurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;
}