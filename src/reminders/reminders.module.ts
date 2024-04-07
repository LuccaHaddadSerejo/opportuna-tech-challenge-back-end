import { Module } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RemindersRepository } from './reminders.repository';

@Module({
  controllers: [RemindersController],
  providers: [RemindersService, PrismaService, RemindersRepository],
})
export class RemindersModule {}
