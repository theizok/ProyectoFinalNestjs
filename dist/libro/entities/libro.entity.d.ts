import { Editorial } from 'src/editorial/entities/editorial.entity';
import { Autor } from 'src/autor/entities/autor.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export declare class Libro {
    id: number;
    title: string;
    releasedAt: Date;
    avaliable: boolean;
    editoriales: Editorial[];
    autor: Autor;
    prestamos: Prestamo[];
}
