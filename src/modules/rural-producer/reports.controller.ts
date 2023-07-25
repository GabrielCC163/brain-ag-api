import { Controller, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TotalOfFarmsResponseDto } from './dto/report-response.dto';
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

}