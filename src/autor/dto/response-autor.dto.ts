import { HttpStatus } from '@nestjs/common';

export class ResponseAutorDto {
  message: string;
  status: HttpStatus;
}
