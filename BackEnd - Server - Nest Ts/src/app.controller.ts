import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';

@ApiTags('Основное')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary: 'Получение сылки на новую версию приложенния'})
  @ApiResponse({status: 200})
  @Get('app/download')
  async LinkToDownload() {
    const Path = `${process.env.BACKEND_LINK}/api/app/latest/`;
    return {
      Link: Path,
    };
  } 

  @Get('app/latest')
  async donwloadApp(@Res() res: Response) {
    const version = this.appService.getLatestVersion();
    const fileName = `my-app-${version.version}.zip`;
    const filePath = path.resolve(__dirname, '../app/latest/', fileName);
    res.download(filePath, fileName);;
  }
}
