import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

export class CreateUsuarioDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  document: string;
}

export class UsuarioDto extends CreateUsuarioDto {
  @ValidateNested({ each: true })
  @Type(() => Prestamo)
  prestamos: Prestamo[];
}

export class UsuarioIdDto {
  @IsNumber()
  id: number;
}
