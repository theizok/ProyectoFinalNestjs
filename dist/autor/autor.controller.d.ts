import { AutorService } from './autor.service';
import { AutorDto, CreateAutorDto } from './dto/create-autor.dto';
export declare class AutorController {
    private readonly autorService;
    constructor(autorService: AutorService);
    create(createAutorDto: CreateAutorDto): Promise<import("./dto/response-autor.dto").ResponseAutorDto>;
    findAll(): AutorDto;
    findOne(id: string): AutorDto;
    update(id: string, createAutorDto: CreateAutorDto): Promise<import("./dto/response-autor.dto").ResponseAutorDto>;
    remove(id: string): Promise<import("./dto/response-autor.dto").ResponseAutorDto>;
}
