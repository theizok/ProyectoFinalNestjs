import { EditorialService } from './editorial.service';
import { CreateEditorialDto, EditorialDto } from './dto/create-editorial.dto';
export declare class EditorialController {
    private readonly editorialService;
    constructor(editorialService: EditorialService);
    create(createEditorialDto: CreateEditorialDto): Promise<import("./dto/response-editorial.dto").ResponseEditorialDto>;
    findAll(): EditorialDto;
    update(id: string, updateEditorialDto: CreateEditorialDto): Promise<import("./dto/response-editorial.dto").ResponseEditorialDto>;
    remove(id: string): Promise<import("./dto/response-editorial.dto").ResponseEditorialDto>;
}
