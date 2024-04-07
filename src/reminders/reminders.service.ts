import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { RemindersRepository } from './reminders.repository';
import { Reminder } from '@prisma/client';

@Injectable()
export class RemindersService {
  constructor(private readonly reminderRepository: RemindersRepository) {}

  async create(reqBody: CreateReminderDto): Promise<Reminder> {
    return await this.reminderRepository.create(reqBody);
  }

  async findAll(): Promise<Reminder[] | []> {
    return await this.reminderRepository.findAll();
  }

  async findOne(id: number): Promise<Reminder> {
    const findReminder: Reminder | void =
      await this.reminderRepository.findOne(id);

    if (!findReminder) {
      throw new HttpException('Reminder not found', HttpStatus.NOT_FOUND);
    }

    return findReminder;
  }

  async update(id: number, reqBody: UpdateReminderDto): Promise<Reminder> {
    await this.findOne(id);

    return await this.reminderRepository.update(id, reqBody);
  }

  async delete(id: number): Promise<void> {
    await this.findOne(id);

    await this.reminderRepository.delete(id);
  }

  async deleteAll(): Promise<void> {
    await this.reminderRepository.deleteAll();
  }
}
