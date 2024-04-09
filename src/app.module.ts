import { Module } from '@nestjs/common';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [RemindersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
