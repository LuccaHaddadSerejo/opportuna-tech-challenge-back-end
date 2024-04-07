import { Injectable } from '@nestjs/common';
import { Reminder } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateReminderDto } from './dto/create-reminder.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(reqBody: CreateReminderDto): Promise<Reminder> {
    return await this.prisma.reminder.create({
      data: {
        ...reqBody,
      },
    });
  }
}
