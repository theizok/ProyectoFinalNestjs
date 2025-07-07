import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AutorNombreDto } from 'src/autor/dto/create-autor.dto';
import { EditorialNombreDto } from 'src/editorial/dto/create-editorial.dto';
import { PrestamoIdDto } from 'src/prestamo/dto/create-prestamo.dto';

export class CreateLibroDto {
  @IsString()
  title: string;

  @Type(() => Date)
  @IsDate()
  releasedAt: Date;

  @IsBoolean()
  avaliable: boolean;
}

export class LibroDto extends CreateLibroDto {
  @Expose()
  id: number;

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EditorialNombreDto)
  editoriales: EditorialNombreDto[];

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => AutorNombreDto)
  autor: AutorNombreDto;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => PrestamoIdDto)
  prestamos: PrestamoIdDto[];
}

export class LibroIdDto {
  @IsNumber()
  id: number;
}
