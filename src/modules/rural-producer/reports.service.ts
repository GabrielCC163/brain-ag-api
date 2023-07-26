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

  async getTotalOfFarmArea(): Promise<{ total_of_farm_area: number }> {
    const total_of_farm_area = await this.producerRepository.sum('farmTotalArea');
    return { total_of_farm_area };
  }

  async getTotalOfFarmsByState(): Promise<{ state: string, farms: number }[]> {
    const farmCounts = await this.producerRepository.createQueryBuilder('rural_producers')
      .select('state')
      .addSelect('COUNT(*)::integer', 'farms')
      .groupBy('state')
      .getRawMany();

    return farmCounts;
  }

  getTotalOfFarmsByCrop(): Promise<{ crop: string, farms: number }[]> {
    return this.producerRepository.createQueryBuilder('rural_producers')
      .select('unnest("plantedCrops") as crop')
      .addSelect('COUNT(*)::integer', 'farms')
      .groupBy('unnest("plantedCrops")')
      .getRawMany();
  }

  async getTotalLandUse(): Promise<{ total_arable_area: string, total_vegetation_area: number }> {
    const landUse = await this.producerRepository.createQueryBuilder('rural_producers')
      .select('SUM("farmArableArea")::integer', 'total_arable_area')
      .addSelect('SUM("farmVegetationArea")::integer', 'total_vegetation_area')
      .getRawMany();

    return landUse[0];
  }
}
