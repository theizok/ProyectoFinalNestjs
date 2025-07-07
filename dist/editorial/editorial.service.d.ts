import { CreateEditorialDto } from './dto/create-editorial.dto';
import { Editorial } from './entities/editorial.entity';
import { Repository } from 'typeorm';
import { ResponseEditorialDto } from './dto/response-editorial.dto';
export declare class EditorialService {
    private readonly _editorialRepository;
    constructor(_editorialRepository: Repository<Editorial>);
    create(createEditorialDto: CreateEditorialDto): Promise<ResponseEditorialDto>;
    findAll(): Promise<Editorial[]>;
    update(id: number, createEditorialDto: CreateEditorialDto): Promise<ResponseEditorialDto>;
    remove(id: number): Promise<ResponseEditorialDto>;
}
