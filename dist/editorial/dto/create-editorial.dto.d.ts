import { Libro } from 'src/libro/entities/libro.entity';
export declare class CreateEditorialDto {
    name: string;
    address: string;
}
export declare class EditorialDto extends CreateEditorialDto {
    id: number;
    libros: Libro[];
}
export declare class EditorialNombreDto {
    name: string;
}
