import { CreateAutorDto, AutorDto } from './dto/create-autor.dto';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';
import { ResponseAutorDto } from './dto/response-autor.dto';
export declare class AutorService {
    private readonly _autorRepository;
    constructor(_autorRepository: Repository<Autor>);
    create(createAutorDto: CreateAutorDto): Promise<ResponseAutorDto>;
    findAll(): Promise<AutorDto[]>;
    findOne(id: number): Promise<AutorDto | null | ResponseAutorDto>;
    update(autorId: number, createAutorDto: CreateAutorDto): Promise<ResponseAutorDto>;
    remove(id: number): Promise<ResponseAutorDto>;
}
