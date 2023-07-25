import { BaseResponseDto, exampleDate } from '@common/dto/base-response.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PlantedCropsEnum } from '../enum';

export class RuralProducerResposeDto extends BaseResponseDto {
    @ApiProperty({ example: '56374294050' })
    document: string;

    @ApiProperty({ example: 'James Howlett' })
    name: string;

    @ApiProperty({ example: 'Edmonton' })
    city: string;

    @ApiProperty({ example: 'AB' })
    state: string;

    @ApiProperty({ example: 'Eagle Creek Farm' })
    farmName: string;

    @ApiProperty({ example: 150 })
    farmTotalArea: number;

    @ApiProperty({ example: 70 })
    farmArableArea: number;

    @ApiProperty({ example: 30 })
    farmVegetationArea: number;

    @ApiPropertyOptional({
        example: [PlantedCropsEnum.COFFEE, PlantedCropsEnum.CORN],
        isArray: true,
        enum: PlantedCropsEnum
    })
    plantedCrops?: PlantedCropsEnum[];
}

export class RuralProducerPaginatedResponseDto {
    @ApiProperty({
        example: [{
            id: '5654860a-4834-42cc-bd7e-01aba4de80b',
            createdAt: exampleDate,
            updatedAt: exampleDate,
            document: '56374294050',
            name: 'James Howlett',
            city: 'Edmonton',
            state: 'AB',
            farmName: 'Eagle Creek Farm',
            farmTotalArea: 150,
            farmArableArea: 70,
            farmVegetationArea: 30,
            plantedCrops: [PlantedCropsEnum.COFFEE, PlantedCropsEnum.CORN]
        }]
    })
    items: [RuralProducerResposeDto]

    @ApiProperty({ example: { totalItems: 1, itemCount: 1, itemsPerPage: 10, totalPages: 1, currentPage: 1 } })
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        currentPage: number
    }

    @ApiProperty({ example: { first: 'http://localhost:3000/rural-producers?limit=10', previous: '', next: '', last: 'http://localhost:3000/rural-producers?page=1&limit=10' } })
    links: {
        first: "http://localhost:3000/rural-producers?limit=10",
        previous: string,
        next: string,
        last: string
    }
}