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
  @Length(11)
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