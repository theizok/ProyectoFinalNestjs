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
exports.AutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const autor_entity_1 = require("./entities/autor.entity");
let AutorService = class AutorService {
    _autorRepository;
    constructor(_autorRepository) {
        this._autorRepository = _autorRepository;
    }
    async create(createAutorDto) {
        const autor = this._autorRepository.create(createAutorDto);
        await this._autorRepository.save(autor);
        const response = {
            message: 'Autor creada',
            status: common_1.HttpStatus.CREATED,
        };
        return response;
    }
    findAll() {
        return this._autorRepository.find();
    }
    async findOne(id) {
        const exists = await this._autorRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Autor con id_: ${id} no encontrado}`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            return this._autorRepository.findOne({ where: { id: id } });
        }
    }
    async update(autorId, createAutorDto) {
        const exists = await this._autorRepository.existsBy({ id: autorId });
        if (!exists) {
            return {
                message: `Autor con id: ${autorId} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._autorRepository.update(autorId, createAutorDto);
            const response = {
                message: `Autor con id: ${autorId} actualizado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
    async remove(id) {
        const exists = await this._autorRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Autor con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._autorRepository.delete(id);
            const response = {
                message: `Autor con id: ${id} eliminado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
};
exports.AutorService = AutorService;
exports.AutorService = AutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(autor_entity_1.Autor)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AutorService);
//# sourceMappingURL=autor.service.js.map