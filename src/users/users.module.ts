import { Module } from '@nestjs/common';
import { UserController } from './aplication/controller/user/user.controller';

@Module({
  controllers: [UserController],
})
export class UsersModule {}
