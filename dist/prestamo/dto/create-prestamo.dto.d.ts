import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class CreatePrestamoDto {
    startedAt: Date;
    usuario: Usuario;
    libro: Libro;
}
export declare class PrestamoDto extends CreatePrestamoDto {
    id: number;
    endedAt: Date | null;
}
export declare class PrestamoIdDto {
    id: number;
}
export declare class CreatePrestamoFinalDto {
    startedAt: Date;
    usuarioId: number;
    libroId: number;
    endedAt?: Date | null;
}
