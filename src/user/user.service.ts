import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }
  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
