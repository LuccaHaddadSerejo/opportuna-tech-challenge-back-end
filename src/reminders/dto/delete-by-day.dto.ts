import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class DeleteByDayDto {
  @ApiProperty({
    description: 'List of reminders to delete',
    example: '[1,2,3,4,5,6]',
    nullable: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  idList: number[];
}
