export class Reminder {
  readonly id: number;
  title: string;
  description?: string;
  date: Date;
  city: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
}
