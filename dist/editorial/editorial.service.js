"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const editorial_entity_1 = require("./entities/editorial.entity");
const typeorm_2 = require("typeorm");
let EditorialService = class EditorialService {
    _editorialRepository;
    constructor(_editorialRepository) {
        this._editorialRepository = _editorialRepository;
    }
    async create(createEditorialDto) {
        const editorial = this._editorialRepository.create(createEditorialDto);
        await this._editorialRepository.save(editorial);
        const response = {
            message: 'Editorial creada',
            status: common_1.HttpStatus.CREATED,
        };
        return response;
    }
    findAll() {
        return this._editorialRepository.find();
    }
    async update(id, createEditorialDto) {
        const exists = await this._editorialRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Editorial con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._editorialRepository.update(id, createEditorialDto);
            const response = {
                message: `Editorial con id: ${id} actualizado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
    async remove(id) {
        const exists = await this._editorialRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Editorial con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._editorialRepository.delete(id);
            const response = {
                message: `Editorial con id: ${id} eliminado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
};
exports.EditorialService = EditorialService;
exports.EditorialService = EditorialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(editorial_entity_1.Editorial)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EditorialService);
//# sourceMappingURL=editorial.service.js.map