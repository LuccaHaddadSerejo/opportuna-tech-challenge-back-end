import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Reminder } from './entities/reminder.entity';
import { DeleteByDayDto } from './dto/delete-by-day.dto';
@ApiTags('reminders')
@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a reminder' })
  @ApiResponse({
    status: 201,
    description: 'Create a new reminder',
    type: Reminder,
  })
  create(@Body() reqBody: CreateReminderDto) {
    return this.remindersService.create(reqBody);
  }

  @Get()
  @ApiOperation({ summary: 'Read all reminders' })
  @ApiResponse({
    status: 200,
    description: 'Read all reminders',
    type: Array<Reminder>,
  })
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read a reminder' })
  @ApiResponse({
    status: 200,
    description: 'Read a reminder by id',
    type: Reminder,
  })
  findOne(@Param('id') id: string) {
    return this.remindersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a reminder' })
  @ApiResponse({
    status: 200,
    description: 'Update a reminder by id',
    type: Reminder,
  })
  update(@Param('id') id: string, @Body() reqBody: UpdateReminderDto) {
    return this.remindersService.update(+id, reqBody);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a reminder' })
  @ApiResponse({
    status: 204,
    description: 'Delete a reminder by id',
    type: null,
  })
  delete(@Param('id') id: string) {
    return this.remindersService.delete(+id);
  }

  @Post('/deleteByDay')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete all reminder of a given day' })
  @ApiResponse({
    status: 204,
    description: 'Delete all reminder of a given day',
    type: null,
  })
  deleteByDay(@Body() idList: DeleteByDayDto) {
    return this.remindersService.deleteByDay(idList);
  }
}
