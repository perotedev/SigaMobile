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
    const hash = await this.checkPasswordHash(password, user.passwordHash);
    if (user && hash) {
      const { _id, username, studantId } = user;
      return {_id, username, studantId };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, _id: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async checkPasswordHash(password: string, hash: string){
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}