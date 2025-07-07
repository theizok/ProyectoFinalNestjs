import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export declare class Usuario {
    id: number;
    name: string;
    document: string;
    prestamos: Prestamo[];
}
