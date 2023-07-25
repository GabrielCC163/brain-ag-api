import { Module } from '@nestjs/common';
import { RuralProducersService } from './rural-producers.service';
import { RuralProducersController } from './rural-producers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuralProducerEntity } from './entities/rural-producer.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [TypeOrmModule.forFeature([RuralProducerEntity])],
  controllers: [RuralProducersController, ReportsController],
  providers: [RuralProducersService, ReportsService],
})
export class RuralProducersModule { }
