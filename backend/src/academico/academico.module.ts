import { Module } from '@nestjs/common';
import { AcademicoService } from './academico.service';
import { AcademicoController } from './academico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academico } from './entities/academico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Academico
    ])
  ],
  controllers: [AcademicoController],
  providers: [AcademicoService],
})
export class AcademicoModule {}
