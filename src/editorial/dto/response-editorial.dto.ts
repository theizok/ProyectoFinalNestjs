import { HttpStatus } from '@nestjs/common';

export class ResponseEditorialDto {
  message: string;
  status: HttpStatus;
}
