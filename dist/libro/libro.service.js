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
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const libro_entity_1 = require("./entities/libro.entity");
const typeorm_2 = require("typeorm");
let LibroService = class LibroService {
    _libroRepository;
    constructor(_libroRepository) {
        this._libroRepository = _libroRepository;
    }
    async create(createLibroDto) {
        const libro = this._libroRepository.create(createLibroDto);
        await this._libroRepository.save(libro);
        const response = {
            message: `Libro creado exitosamente`,
            status: common_1.HttpStatus.CREATED,
        };
        return response;
    }
    findAll() {
        return this._libroRepository.find();
    }
    async update(id, createLibroDto) {
        const exists = await this._libroRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Libro con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._libroRepository.update(id, createLibroDto);
            const response = {
                message: `Libro con id: ${id} actualizado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
    async remove(id) {
        const exists = await this._libroRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Libro con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._libroRepository.delete(id);
            const response = {
                message: `Libro con id: ${id} eliminado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
};
exports.LibroService = LibroService;
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(libro_entity_1.Libro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LibroService);
//# sourceMappingURL=libro.service.js.map