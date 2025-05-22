import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { ClassModule } from './module/class/class.module';
import { CourseModule } from './module/course/course.module';
import { EnrollmentModule } from './module/enrollment/enrollment.module';
import { UserModule } from './module/user/user.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    UserModule,
    DatabaseModule,
    ClassModule,
    EnrollmentModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
