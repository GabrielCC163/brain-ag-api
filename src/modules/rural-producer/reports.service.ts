import { Injectable } from '@nestjs/common';
import { RuralProducerEntity } from './entities/rural-producer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(RuralProducerEntity)
    private producerRepository: Repository<RuralProducerEntity>,
  ) { }

  async getTotalOfFarms(): Promise<{ total_of_farms: number }> {
    const total_of_farms = await this.producerRepository.count();
    return { total_of_farms };
  }
}
