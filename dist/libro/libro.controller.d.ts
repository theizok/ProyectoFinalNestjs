import { LibroService } from './libro.service';
import { CreateLibroDto, LibroDto } from './dto/create-libro.dto';
export declare class LibroController {
    private readonly libroService;
    constructor(libroService: LibroService);
    create(createLibroDto: CreateLibroDto): LibroDto;
    findAll(): Promise<LibroDto[]>;
    update(id: string, updateLibroDto: CreateLibroDto): Promise<import("./dto/response-libro.dto").ResponseLibroDto>;
    remove(id: string): Promise<import("./dto/response-libro.dto").ResponseLibroDto>;
}
