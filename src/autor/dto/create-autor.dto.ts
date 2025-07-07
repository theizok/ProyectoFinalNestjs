import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Libro } from 'src/libro/entities/libro.entity';

export class CreateAutorDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Expose()
  age: number;
}

export class AutorDto extends CreateAutorDto {
  @Exclude()
  id: number;

  @IsOptional()
  @Expose()
  libros: Libro[];
}

export class AutorNombreDto {
  name: string;
}
