import { Curso } from "src/curso/entities/curso.entity";
import { TipoDocumento } from "src/tipo_documento/entities/tipo_documento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Academico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;
  
  @Column({ nullable: true })
  cep: string;

  @Column({ unique: true, nullable: true })
  cpf: string;

  @Column({ nullable: true })
  dt_nascimento: Date;

  @Column({ nullable: true })
  documento: string;

  @ManyToOne(() => Curso, curso => curso.id)
  curso: Curso;

  @ManyToOne(() => TipoDocumento, tipoDocumento => tipoDocumento.id, { nullable: true })
  tipoDocumento: TipoDocumento;
}
