import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRuralProducerDto } from './dto/create-rural-producer.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { PaginationDTO } from '@common/dto/pagination.dto';
import { RuralProducerEntity } from './entities/rural-producer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRuralProducerDto } from './dto/update-rural-producer.dto';

@Injectable()
export class RuralProducersService {
  constructor(
    @InjectRepository(RuralProducerEntity)
    private producerRepository: Repository<RuralProducerEntity>,
  ) { }

  async create(createProducerDto: CreateRuralProducerDto): Promise<RuralProducerEntity> {
    const { document, farmTotalArea, farmArableArea, farmVegetationArea } = createProducerDto;
    if ((farmArableArea + farmVegetationArea) > farmTotalArea) throw new BadRequestException('Invalid farm area');

    const producer = await this.producerRepository.findOne({ where: { document } });
    if (producer) throw new BadRequestException(`Rural producer already exists`);

    const newProducer = await this.producerRepository.save(createProducerDto);
    return newProducer;
  }

  async update(id: string, updateProducerDto: UpdateRuralProducerDto): Promise<RuralProducerEntity> {
    const producer = await this.producerRepository.findOneBy({ id });
    if (!producer) throw new NotFoundException('Rural producer not found');

    const producerData = {
      ...updateProducerDto,
      document: updateProducerDto.document || producer.document,
      name: updateProducerDto.name || producer.name,
      city: updateProducerDto.city || producer.city,
      state: updateProducerDto.state || producer.state,
      farmName: updateProducerDto.farmName || producer.farmName,
      farmTotalArea: updateProducerDto.farmTotalArea || producer.farmTotalArea,
      farmArableArea: updateProducerDto.farmArableArea || producer.farmArableArea,
      farmVegetationArea: updateProducerDto.farmVegetationArea || producer.farmVegetationArea,
    };
    const { farmTotalArea, farmArableArea, farmVegetationArea } = producerData;
    if ((farmArableArea + farmVegetationArea) > farmTotalArea) throw new BadRequestException('Invalid farm area');

    await this.producerRepository.update({ id }, producerData);
    return this.producerRepository.findOneBy({ id });
  }

  async findAll(pagination: PaginationDTO): Promise<Pagination<RuralProducerEntity>> {
    const { page, limit, route, document } = pagination;
    const options: IPaginationOptions = { page, limit, route };
    const searchOptions = { where: {}, order: { createdAt: 'DESC' } } as any;
    if (document) searchOptions.where['document'] = document;
    const result = await paginate<RuralProducerEntity>(this.producerRepository, options, searchOptions);
    if (!result?.items?.length) throw new NotFoundException('No rural producers to list')
    return result;
  }

  async remove(id: string): Promise<void> {
    const producer = await this.producerRepository.findOneBy({ id });
    if (!producer) throw new NotFoundException('Rural producer not found');
    await this.producerRepository.delete(id);
  }
}
