import { ArrayUnique, IsArray, IsDecimal, IsDefined, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Matches, MaxLength } from 'class-validator';
import { PlantedCropsEnum } from '../enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRuralProducerDto {
  @ApiProperty({ example: '56374294050' })
  @IsNotEmpty()
  @IsNumberString()
  @Matches(/([0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2})|([0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2})/, {
    message: 'Invalid document format',
  })
  @MaxLength(14)
  document: string;

  @ApiProperty({ example: 'James Howlett' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Edmonton' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: 'AB' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ example: 'Eagle Creek Farm' })
  @IsNotEmpty()
  @IsString()
  farmName: string;

  @ApiProperty({ example: 150 })
  @IsDefined()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  farmTotalArea: number;

  @ApiProperty({ example: 70 })
  @IsDefined()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  farmArableArea: number;

  @ApiProperty({ example: 30 })
  @IsDefined()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  farmVegetationArea: number;

  @ApiPropertyOptional({
    example: [PlantedCropsEnum.COFFEE, PlantedCropsEnum.CORN],
    isArray: true,
    enum: PlantedCropsEnum
  })
  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsEnum(PlantedCropsEnum, { each: true })
  plantedCrops?: PlantedCropsEnum[];
}
