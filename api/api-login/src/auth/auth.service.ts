import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && this.checkPasswordHash(password, user.password_hash)) {
      const { _id, username, password_hash, student_id } = user;
      return {_id, username, password_hash, student_id };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async checkPasswordHash(password: string, hash: string){
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}