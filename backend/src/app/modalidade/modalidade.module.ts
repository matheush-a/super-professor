import { Module } from '@nestjs/common';
import { ModalidadeController } from './modalidade.controller';
import { ModalidadeService } from './modalidade.service';

@Module({
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
  exports: [ModalidadeService]
})
export class ModalidadeModule {}