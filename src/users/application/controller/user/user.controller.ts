import { UserService } from './../../services/user/user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly usaerService: UserService) {}
  /*
  GET    /users/:id
  POST   /users
  PATCH  /users/:id
  DELETE /users/:id
  */

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return this.usaerService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usaerService.findOne(Number(id));
  }
  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      phone: string;
      imageUrl: string;
      createdAt: string;
      role: 'ADMIN' | 'STUDENT' | 'TEACHER';
    },
  ) {
    return this.usaerService.createUser(user);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name: string;
      email?: string;
      phone?: string;
      imageUrl?: string;
      createdAt?: string;
      role?: 'ADMIN' | 'STUDENT' | 'TEACHER';
    },
  ) {
    return this.usaerService.update(Number(id), userUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usaerService.delete(Number(id));
  }
}
