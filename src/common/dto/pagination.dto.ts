import { IsNumber, IsNumberString, IsOptional, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiHideProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDTO {
  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @Min(1)
  @Max(50)
  limit: number = 10;

  @ApiHideProperty()
  route: string = 'http://localhost:3000/rural-producer';

  @IsOptional()
  @IsNumberString()
  document?: string;
}
