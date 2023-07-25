import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Query, HttpCode, Put } from '@nestjs/common';
import { RuralProducersService } from './rural-producers.service';
import { CreateRuralProducerDto } from './dto/create-rural-producer.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { PaginationDTO } from '@common/dto/pagination.dto';
import { RuralProducerEntity } from './entities/rural-producer.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '@config/app.config';
import { RuralProducerPaginatedResponseDto, RuralProducerResposeDto } from './dto/rural-producer-response.dto';
import { UpdateRuralProducerDto } from './dto/update-rural-producer.dto';

@ApiTags('Rural Producers')
@Controller('rural-producers')
export class RuralProducersController {
  private baseUrl: string;

  constructor(private readonly ruralProducersService: RuralProducersService, private readonly configService: ConfigService<AppConfig>) {
    this.baseUrl = this.configService.get('base_url');
  }

  @Post()
  @ApiOperation({ summary: 'Create rural producer' })
  @ApiCreatedResponse({ type: RuralProducerResposeDto, description: 'Rural producer created' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() createRuralProducerDto: CreateRuralProducerDto): Promise<RuralProducerEntity> {
    return this.ruralProducersService.create(createRuralProducerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a rural producer' })
  @ApiOkResponse({ type: RuralProducerResposeDto, description: 'Rural producer successfully updated' })
  @ApiNotFoundResponse({ description: 'Rural producer not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProducerDto: UpdateRuralProducerDto): Promise<RuralProducerEntity> {
    return this.ruralProducersService.update(id, updateProducerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rural producers ' })
  @ApiOkResponse({ type: RuralProducerPaginatedResponseDto, description: 'Paginated response of all rural producers' })
  @ApiNotFoundResponse({ description: 'Rural producers not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findAll(@Query() pagination: PaginationDTO): Promise<Pagination<RuralProducerEntity>> {
    pagination.route = `${this.baseUrl}/rural-producers`;
    return this.ruralProducersService.findAll(pagination);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({ description: 'Rural producer removed' })
  @ApiNotFoundResponse({ description: 'Rural producer not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.ruralProducersService.remove(id);
  }
}
