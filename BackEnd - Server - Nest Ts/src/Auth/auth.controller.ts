import { 
    Body, 
    Controller, 
    Get, 
    Post 
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { AuthService } from './auth.service';


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200})
    @Post('/registartion')
    registartion(@Body() UserDto: UserDto){
        return this.authService.registartion(UserDto)
    }

    @ApiOperation({summary: 'Авторизация пользователя'})
    @ApiResponse({status: 200})
    @Post('/login')
    login(@Body() UserDto: UserDto){
        return this.authService.login(UserDto)
    }

    @ApiOperation({summary: 'Авторизация пользователя по токену'})
    @ApiResponse({status: 200})
    @Get('/jwt')
    jwtAuth(@Body() UserDto: UserDto){
        return this.authService.jwtAuth(UserDto)
    }
}
