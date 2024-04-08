import { ApiProperty } from '@nestjs/swagger';

export class Reminder {
  @ApiProperty({
    description: 'Reminder id',
  })
  readonly id: number;

  @ApiProperty({
    description: 'Reminder title',
  })
  title: string;

  @ApiProperty({
    description: 'Reminder description',
  })
  description: string;

  @ApiProperty({
    description: 'Reminder date',
  })
  date: string;

  @ApiProperty({
    description: 'Reminder time',
  })
  time: string;

  @ApiProperty({
    description: 'Reminder city',
  })
  city: string;

  @ApiProperty({
    description: 'Reminder color',
  })
  color: string;
}
