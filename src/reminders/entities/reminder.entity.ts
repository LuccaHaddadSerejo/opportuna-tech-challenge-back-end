export class Reminder {
  readonly id: number;
  title: string;
  description?: string;
  date: string;
  city: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
}
