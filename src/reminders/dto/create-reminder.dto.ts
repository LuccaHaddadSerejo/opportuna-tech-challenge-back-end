import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsISO8601 } from 'class-validator';

export class CreateReminderDto {
  @ApiProperty({
    description: 'Reminder title',
    example: 'Study',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'The title can only have up to 30 characters' })
  title: string;

  @ApiProperty({
    description: 'Reminder description',
    example: 'Study 1 hour each subject',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'The title can only have up to 30 characters' })
  description: string;

  @ApiProperty({
    description: 'Reminder date',
    example: '25-04-2024T21:33:36Z',
    nullable: false,
  })
  @IsISO8601({
    strict: true,
  })
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'Reminder time',
    example: '25-04-2024T21:33:36Z',
    nullable: false,
  })
  @IsISO8601({
    strict: true,
  })
  @IsNotEmpty()
  time: string;

  @ApiProperty({
    description: 'Reminder city',
    example: 'Brasília',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Reminder color',
    example: 'red',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  color: string;
}
