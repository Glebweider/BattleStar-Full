import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/DataBase/schemas/user.schema';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({summary: 'Получение пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  async GetUsers(){
      return this.userService.getUsers()
  }

  @ApiOperation({summary: 'Получение пользователя'})
  @ApiResponse({status: 200, type: User})
  @Get(':uuid')
  async GetUser(@Param('uuid') uuid: number){
    return this.userService.getUser(uuid)
  }

  @ApiOperation({summary: 'Получение аватарки'})
  @ApiResponse({status: 200, type: User})
  @Get('avatar/:uuid/:filename')
  async displayUserAvatar(
    @Param('uuid') uuid: string,
    @Param('filename') filename: string,
    @Res() res,
    ){
      try {
        const file = await this.userService.getAvatar(uuid, filename);
        res.contentType(filename);
        res.send(file)
      } catch (err) {
        res.status(HttpStatus.NOT_FOUND).json({
          id: false,
          message: 'Avatar not found',
        })
      }

  }
}
