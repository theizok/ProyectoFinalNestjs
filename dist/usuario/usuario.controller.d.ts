import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto, UsuarioDto } from './dto/create-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./dto/response-usuario.dto").ResponseUsuarioDto>;
    findAll(): UsuarioDto;
    update(id: string, updateUsuarioDto: CreateUsuarioDto): Promise<import("./dto/response-usuario.dto").ResponseUsuarioDto>;
    remove(id: string): Promise<import("./dto/response-usuario.dto").ResponseUsuarioDto>;
}
