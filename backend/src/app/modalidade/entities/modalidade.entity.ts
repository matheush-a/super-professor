import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modalidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;
}