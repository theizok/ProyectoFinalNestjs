import { CreatePrestamoFinalDto, PrestamoDto } from './dto/create-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';
import { ResponsePrestamoDto } from './dto/response-prestamo.dto';
export declare class PrestamoService {
    private readonly _prestamoRepository;
    constructor(_prestamoRepository: Repository<Prestamo>);
    create(createPrestamoDto: CreatePrestamoFinalDto): Promise<ResponsePrestamoDto>;
    findAll(): Promise<PrestamoDto[]>;
    update(id: number, updatePrestamoDto: CreatePrestamoFinalDto): Promise<ResponsePrestamoDto>;
    remove(id: number): Promise<ResponsePrestamoDto>;
}
