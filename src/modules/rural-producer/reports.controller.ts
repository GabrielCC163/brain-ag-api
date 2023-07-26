import { Controller, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TotalOfFarmAreaResponseDto, TotalOfFarmsByCropResponseDto, TotalOfFarmsByStateResponseDto, TotalOfFarmsResponseDto, TotalOfLandUseResponseDto } from './dto/report-response.dto';
import { ReportsService } from './reports.service';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) { }

    @Get('total-farms')
    @ApiOperation({ summary: 'Total of farms' })
    @ApiOkResponse({ type: TotalOfFarmsResponseDto })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    totalFarms(): Promise<{ total_of_farms: number }> {
        return this.reportsService.getTotalOfFarms();
    }

    @Get('total-farm-area')
    @ApiOperation({ summary: 'Total of farm area' })
    @ApiOkResponse({ type: TotalOfFarmAreaResponseDto })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    totalFarmArea(): Promise<{ total_of_farm_area: number }> {
        return this.reportsService.getTotalOfFarmArea();
    }

    @Get('total-farms-by-state')
    @ApiOperation({ summary: 'Total of farms by state' })
    @ApiOkResponse({ type: [TotalOfFarmsByStateResponseDto] })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    totalFarmsByState(): Promise<{ state: string, farms: number }[]> {
        return this.reportsService.getTotalOfFarmsByState();
    }

    @Get('total-farms-by-crop')
    @ApiOperation({ summary: 'Total of farms by crop' })
    @ApiOkResponse({ type: [TotalOfFarmsByCropResponseDto] })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    totalFarmsByCrop(): Promise<{ crop: string, farms: number }[]> {
        return this.reportsService.getTotalOfFarmsByCrop();
    }

    @Get('land-use')
    @ApiOperation({ summary: 'Total of land use (arable area and vegetation area)' })
    @ApiOkResponse({ type: TotalOfLandUseResponseDto })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    totalLandUse(): Promise<{ total_arable_area: string, total_vegetation_area: number }> {
        return this.reportsService.getTotalLandUse();
    }

}