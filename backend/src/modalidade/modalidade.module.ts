import { Module } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';
import { ModalidadeController } from './modalidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modalidade } from './entities/modalidade.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Modalidade
    ])
  ],
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
