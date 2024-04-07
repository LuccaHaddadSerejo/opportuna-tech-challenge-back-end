import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  create(@Body() reqBody: CreateReminderDto) {
    return this.remindersService.create(reqBody);
  }

  @Get()
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remindersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() reqBody: UpdateReminderDto) {
    return this.remindersService.update(+id, reqBody);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remindersService.delete(+id);
  }
}
