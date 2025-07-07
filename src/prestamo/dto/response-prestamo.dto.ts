import { HttpStatus } from '@nestjs/common';

export class ResponsePrestamoDto {
  message: string;
  status: HttpStatus;
}
