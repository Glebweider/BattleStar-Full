import { Controller, Get, Param, Delete } from '@nestjs/common';
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
  async GetUser(@Param('uuid') uuid:string){
      return this.userService.getUser(uuid)
  }
}
