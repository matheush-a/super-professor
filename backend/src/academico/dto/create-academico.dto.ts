import { IsEmail, IsNotEmpty, IsNumberString, Validate } from "class-validator";
import { IsPhone } from "../validation/academico.validator";
import { Academico } from "../entities/academico.entity";

export class CreateAcademicoDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail({}, { message: 'O e-mail informado é inválido'})
  email: string;

  @Validate(IsPhone)
  telefone: string;

  @IsNumberString()
  cursoId: number;
}