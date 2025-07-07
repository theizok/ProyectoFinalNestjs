import { HttpStatus } from '@nestjs/common';

export class ResponseLibroDto {
  message: string;
  status: HttpStatus;
}
