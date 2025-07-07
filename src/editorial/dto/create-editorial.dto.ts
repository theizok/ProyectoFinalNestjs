import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Libro } from 'src/libro/entities/libro.entity';

export class CreateEditorialDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  address: string;
}

export class EditorialDto extends CreateEditorialDto {
  @Exclude()
  id: number;

  @IsOptional()
  @Expose()
  libros: Libro[];
}

export class EditorialNombreDto {
  name: string;
}
