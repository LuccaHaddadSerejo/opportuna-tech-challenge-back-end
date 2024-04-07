import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateReminderDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'The title can only have up to 30 characters' })
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}
