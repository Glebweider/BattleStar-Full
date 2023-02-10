import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatsService } from './stats.service';

@ApiTags('Статистика')
@Controller('stats')
export class StatsController {
    constructor(private statsService: StatsService) {}

    @ApiOperation({summary: 'Вся статистика сервера'})
    @ApiResponse({status: 200})
    @Get('/')
    Statistic(){
        return this.statsService.Stats()
    }
}
