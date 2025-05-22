import { Module } from '@nestjs/common';

import { UserService } from './application/services/user.service';
import { UserController } from './presentations/controller/user/user.controller';
import { DatabaseModule } from 'src/config/database/database.module';
@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
