import { Module } from '@nestjs/common';

import { UsersService } from './application/services/users.service';
import { UsersController } from './presentations/controller/user/users.controller';
import { DatabaseModule } from 'src/config/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
