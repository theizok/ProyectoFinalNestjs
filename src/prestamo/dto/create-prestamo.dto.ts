import { Exclude, Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class CreatePrestamoDto {
  @IsDate()
  startedAt: Date;

  @ValidateNested()
  @Type(() => Usuario)
  usuario: Usuario;

  @ValidateNested()
  @Type(() => Libro)
  libro: Libro;
}

export class PrestamoDto extends CreatePrestamoDto {
  @Exclude()
  id: number;

  @Exclude()
  endedAt: Date | null;
}

export class PrestamoIdDto {
  id: number;
}

export class CreatePrestamoFinalDto {
  @IsDate()
  @Type(() => Date)
  startedAt: Date;

  @IsNumber()
  @Type(() => Number)
  usuarioId: number;

  @IsNumber()
  @Type(() => Number)
  libroId: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  endedAt?: Date | null;
}
