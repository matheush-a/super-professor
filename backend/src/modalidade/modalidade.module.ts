import { Module } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';
import { ModalidadeController } from './modalidade.controller';

@Module({
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
