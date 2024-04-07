import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateReminderDto {
  @ApiProperty({
    description: 'Título do lembrete',
    example: 'Estudar!',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'The title can only have up to 30 characters' })
  title: string;

  @ApiProperty({
    description: 'Descrição do lembrete',
    example: 'Estudar 1 hora por cada matéria',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Data e hora do lembrete',
    example: '30-08-2024T00:00:00Z',
    nullable: false,
  })
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'Cidade do lembrete',
    example: 'Brasília',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Cor do lembrete',
    example: '#900000',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  color: string;
}
