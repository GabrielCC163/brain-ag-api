import { ApiProperty } from '@nestjs/swagger';

export class TotalOfFarmsResponseDto {
    @ApiProperty({ example: 10 })
    total_of_farms: number;
}