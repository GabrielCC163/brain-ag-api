import { ApiProperty } from '@nestjs/swagger';

export class TotalOfFarmsResponseDto {
    @ApiProperty({ example: 10 })
    total_of_farms: number;
}

export class TotalOfFarmAreaResponseDto {
    @ApiProperty({ example: 670 })
    total_of_farm_area: number;
}

export class TotalOfFarmsByStateResponseDto {
    @ApiProperty({ example: 'AB' })
    state: string;

    @ApiProperty({ example: 10 })
    farms: number;
}

export class TotalOfFarmsByCropResponseDto {
    @ApiProperty({ example: 'COFFEE' })
    crop: string;

    @ApiProperty({ example: 10 })
    farms: number;
}

export class TotalOfLandUseResponseDto {
    @ApiProperty({ example: 450 })
    total_arable_area: number;

    @ApiProperty({ example: 300 })
    total_vegetation_area: number;
}