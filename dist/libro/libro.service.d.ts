import { CreateLibroDto, LibroDto } from './dto/create-libro.dto';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { ResponseLibroDto } from './dto/response-libro.dto';
export declare class LibroService {
    private readonly _libroRepository;
    constructor(_libroRepository: Repository<Libro>);
    create(createLibroDto: CreateLibroDto): Promise<ResponseLibroDto>;
    findAll(): Promise<LibroDto[]>;
    update(id: number, createLibroDto: CreateLibroDto): Promise<ResponseLibroDto>;
    remove(id: number): Promise<ResponseLibroDto>;
}
