import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
    async registartion(userDto: UserDto){
        return userDto
    }
    async login(userDto: UserDto){
        return userDto
    }
    async jwtAuth(userDto: UserDto){
        return userDto
    }
}
