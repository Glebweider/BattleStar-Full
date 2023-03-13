import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../DataBase/schemas/user.schema';
import { Model } from 'mongoose';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    const Users = await this.userModel.find().exec();
    if (Users) {
      const filtred = [];
      new Map(Object.entries(Users)).forEach(elm => {
        elm.password = '';
        elm.ipp = '';
        elm.mail = '';
        filtred.push(Users)
      })
      return Users      
    } else {
      throw new NotFoundException('Users is not found')
    }
  }

  async getUser(uuid: number): Promise<User> {
    if (uuid) {
      const User = await this.userModel.findOne({uuid})
      if (User) {
        User.password = '';
        User.ipp = '';
        User.mail = '';
        return User;   
      } else {
        throw new NotFoundException(`User ${User} is not found`)
      }      
    } else {
      throw new NotFoundException(`${uuid} is not found`)
    }
  }

  async getAvatar(uuid: string, filename: string): Promise<User> {
    const file = fs.createReadStream(`./Uploads/avatars/${uuid}/${filename}`);
    return;
  }

  async UploadUserAvatar(uuid: number): Promise<User> {
    const User = await this.userModel.findOne({uuid})
    User.password = '';
    User.ipp = '';
    User.mail = '';
    return User
  }
}
