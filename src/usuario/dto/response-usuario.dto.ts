import { HttpStatus } from '@nestjs/common';

export class ResponseUsuarioDto {
  message: string;
  status: HttpStatus;
}
