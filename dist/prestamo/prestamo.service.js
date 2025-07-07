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
exports.PrestamoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prestamo_entity_1 = require("./entities/prestamo.entity");
const typeorm_2 = require("typeorm");
const libro_entity_1 = require("../libro/entities/libro.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
let PrestamoService = class PrestamoService {
    _prestamoRepository;
    constructor(_prestamoRepository) {
        this._prestamoRepository = _prestamoRepository;
    }
    async create(createPrestamoDto) {
        const usuario = await this._prestamoRepository.manager.findOneByOrFail(usuario_entity_1.Usuario, { id: createPrestamoDto.usuarioId });
        const libro = await this._prestamoRepository.manager.findOneByOrFail(libro_entity_1.Libro, { id: createPrestamoDto.libroId });
        const prestamo = this._prestamoRepository.create({
            startedAt: createPrestamoDto.startedAt,
            usuario,
            libro,
        });
        await this._prestamoRepository.save(prestamo);
        return {
            message: 'Prestamo creado',
            status: common_1.HttpStatus.CREATED,
        };
    }
    findAll() {
        return this._prestamoRepository.find();
    }
    async update(id, updatePrestamoDto) {
        const exists = await this._prestamoRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Prestamo con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._prestamoRepository.update(id, {
                startedAt: new Date(updatePrestamoDto.startedAt),
                endedAt: updatePrestamoDto.endedAt
                    ? new Date(updatePrestamoDto.endedAt)
                    : null,
                usuario: { id: updatePrestamoDto.usuarioId },
                libro: { id: updatePrestamoDto.libroId },
            });
            const response = {
                message: `Prestamo con id: ${id} actualizado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
    async remove(id) {
        const exists = await this._prestamoRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Prestamo con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._prestamoRepository.delete(id);
            const response = {
                message: `Prestamo con id: ${id} eliminado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
};
exports.PrestamoService = PrestamoService;
exports.PrestamoService = PrestamoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestamo_entity_1.Prestamo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrestamoService);
//# sourceMappingURL=prestamo.service.js.map