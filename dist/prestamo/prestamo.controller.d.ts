import { PrestamoService } from './prestamo.service';
import { CreatePrestamoFinalDto } from './dto/create-prestamo.dto';
export declare class PrestamoController {
    private readonly prestamoService;
    constructor(prestamoService: PrestamoService);
    create(createPrestamoDto: CreatePrestamoFinalDto): Promise<import("./dto/response-prestamo.dto").ResponsePrestamoDto>;
    findAll(): Promise<import("./dto/create-prestamo.dto").PrestamoDto[]>;
    update(id: string, updatePrestamoDto: CreatePrestamoFinalDto): Promise<import("./dto/response-prestamo.dto").ResponsePrestamoDto>;
    remove(id: string): Promise<import("./dto/response-prestamo.dto").ResponsePrestamoDto>;
}
