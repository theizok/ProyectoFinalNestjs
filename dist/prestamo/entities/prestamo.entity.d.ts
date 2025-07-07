import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class Prestamo {
    id: number;
    startedAt: Date;
    endedAt: Date | null;
    usuario: Usuario;
    libro: Libro;
}
