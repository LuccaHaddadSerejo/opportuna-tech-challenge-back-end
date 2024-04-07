import { ApiProperty } from '@nestjs/swagger';

export class Reminder {
  @ApiProperty({
    description: 'Id do lembrete',
  })
  readonly id: number;

  @ApiProperty({
    description: 'Título do lembrete',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição do lembrete',
  })
  description?: string;

  @ApiProperty({
    description: 'Data do lembrete',
  })
  date: string;

  @ApiProperty({
    description: 'Hora do lembrete',
  })
  time: string;

  @ApiProperty({
    description: 'Cidade do lembrete',
  })
  city: string;

  @ApiProperty({
    description: 'Cor do lembrete',
  })
  color: string;
}
