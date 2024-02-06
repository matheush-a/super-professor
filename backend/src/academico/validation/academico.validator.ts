
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import cepValidator from 'src/app/services/cep.validator';

@ValidatorConstraint({ name: 'IsPhone', async: false })
export class IsPhone implements ValidatorConstraintInterface {
  validate(telefone: string) {
    return telefone?.match(/(\d{11})/) ? true : false;
  }

  defaultMessage() {
    return 'Telefone inválido';
  }
}

@ValidatorConstraint({ name: 'IsCEP', async: false })
export class IsCEP implements ValidatorConstraintInterface {
  async validate(cep: string) {
    const response = await cepValidator(cep);

    return response ? true : false;
  }

  defaultMessage() {
    return 'CEP inválido';
  }
}

export function validateUniqueFields(fields: string[]) {
  const message = [];

  fields.forEach((item) => {
    message.push(`${item} já está cadastrado.`);
  })

  return {
    "message": message,
    "error": "Unprocessable Entity",
    "statusCode": 422
  }
}