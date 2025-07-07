import { AutorNombreDto } from 'src/autor/dto/create-autor.dto';
import { EditorialNombreDto } from 'src/editorial/dto/create-editorial.dto';
import { PrestamoIdDto } from 'src/prestamo/dto/create-prestamo.dto';
export declare class CreateLibroDto {
    title: string;
    releasedAt: Date;
    avaliable: boolean;
}
export declare class LibroDto extends CreateLibroDto {
    id: number;
    editoriales: EditorialNombreDto[];
    autor: AutorNombreDto;
    prestamos: PrestamoIdDto[];
}
export declare class LibroIdDto {
    id: number;
}
