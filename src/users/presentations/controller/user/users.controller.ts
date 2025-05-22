import { CreateUsersDTO } from 'src/users/application/dtos/create-users-dto';
import { UpdateUsersDTO } from 'src/users/application/dtos/update-users-dto';
import { UsersService } from '../../../application/services/users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /*
  GET    /users/:id
  POST   /users
  PATCH  /users/:id
  DELETE /users/:id
  */

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(
    @Body(ValidationPipe)
    createUsersDTO: CreateUsersDTO,
  ) {
    return this.usersService.createUser(createUsersDTO);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUsersDTO: UpdateUsersDTO,
  ) {
    return this.usersService.update(id, updateUsersDTO);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
