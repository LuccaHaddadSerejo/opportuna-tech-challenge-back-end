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
@ApiTags('reminders')
@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @ApiOperation({ summary: 'Criação de lembretes' })
  @ApiResponse({
    status: 201,
    description: 'Criar um novo lembrete',
    type: Reminder,
  })
  create(@Body() reqBody: CreateReminderDto) {
    return this.remindersService.create(reqBody);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os lembretes' })
  @ApiResponse({
    status: 200,
    description: 'Buscar lembretes',
    type: Array<Reminder>,
  })
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar lembrete por id' })
  @ApiResponse({
    status: 200,
    description: 'Buscar um lembrete',
    type: Reminder,
  })
  findOne(@Param('id') id: string) {
    return this.remindersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lembrete por id' })
  @ApiResponse({
    status: 200,
    description: 'Atualizar um lembrete',
    type: Reminder,
  })
  update(@Param('id') id: string, @Body() reqBody: UpdateReminderDto) {
    return this.remindersService.update(+id, reqBody);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Deletar um lembrete por id' })
  @ApiResponse({
    status: 204,
    description: 'Deletar um lembrete',
    type: null,
  })
  delete(@Param('id') id: string) {
    return this.remindersService.deleteOne(+id);
  }

  @Delete('/deleteAll')
  @HttpCode(204)
  @ApiOperation({ summary: 'Deletar todos os lembretes' })
  @ApiResponse({
    status: 204,
    description: 'Deletar todos os lembretes',
    type: null,
  })
  deleteAll() {
    return this.remindersService.deleteAll();
  }
}
