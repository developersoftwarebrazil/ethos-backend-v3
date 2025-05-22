import { CreateUserDTO } from 'src/users/application/dtos/create-user-dto';
import { UpdateUserDTO } from 'src/users/application/dtos/update-user-dto';
import { UserService } from '../../../application/services/user.service';
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usaerService.findOne(id);
  }
  @Post()
  create(
    @Body(ValidationPipe)
    createUserDTO: CreateUserDTO,
  ) {
    return this.usaerService.createUser(createUserDTO);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDTO: UpdateUserDTO,
  ) {
    return this.usaerService.update(id, updateUserDTO);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usaerService.delete(id);
  }
}
