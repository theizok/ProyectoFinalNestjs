import { CreateUsuarioDto, UsuarioDto } from './dto/create-usuario.dto';
import { ResponseUsuarioDto } from './dto/response-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private readonly _usuarioRepository;
    constructor(_usuarioRepository: Repository<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<ResponseUsuarioDto>;
    findAll(): Promise<UsuarioDto[]>;
    update(id: number, updateUsuarioDto: CreateUsuarioDto): Promise<ResponseUsuarioDto>;
    remove(id: number): Promise<ResponseUsuarioDto>;
}
