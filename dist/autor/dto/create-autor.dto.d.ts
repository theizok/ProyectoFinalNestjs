import { Libro } from 'src/libro/entities/libro.entity';
export declare class CreateAutorDto {
    name: string;
    age: number;
}
export declare class AutorDto extends CreateAutorDto {
    id: number;
    libros: Libro[];
}
export declare class AutorNombreDto {
    name: string;
}
