import { Module } from '@nestjs/common';
import { UserController } from './application/controller/user/user.controller';
import { UserService } from './application/services/user/user.service';
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
