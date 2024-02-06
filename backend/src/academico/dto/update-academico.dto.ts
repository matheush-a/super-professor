import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicoDto } from './create-academico.dto';
import { IsDateString, IsNumberString, IsOptional, IsString, Length, Validate } from 'class-validator';
import { IsCEP } from '../validation/academico.validator';

export class UpdateAcademicoDto extends PartialType(CreateAcademicoDto) {
  @IsOptional()
  @Validate(IsCEP)
  cep?: string;

  @IsOptional()
  @IsString()
  @Length(11, 11, { message: 'O CPF deve conter 11 dígitos'})
  cpf?: string;

  @IsOptional()
  @IsDateString()
  dt_nascimento?: string;

  @IsOptional()
  documento?: string;

  @IsOptional()
  @IsNumberString()
  tipoDocumentoId: number;
}