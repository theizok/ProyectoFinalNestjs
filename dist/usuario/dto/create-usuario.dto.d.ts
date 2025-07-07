import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export declare class CreateUsuarioDto {
    name: string;
    document: string;
}
export declare class UsuarioDto extends CreateUsuarioDto {
    prestamos: Prestamo[];
}
export declare class UsuarioIdDto {
    id: number;
}
