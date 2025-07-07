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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    _usuarioRepository;
    constructor(_usuarioRepository) {
        this._usuarioRepository = _usuarioRepository;
    }
    async create(createUsuarioDto) {
        const usuario = this._usuarioRepository.create(createUsuarioDto);
        await this._usuarioRepository.save(usuario);
        const response = {
            message: 'Usuario creado',
            status: common_1.HttpStatus.CREATED,
        };
        return response;
    }
    findAll() {
        return this._usuarioRepository.find();
    }
    async update(id, updateUsuarioDto) {
        const exists = await this._usuarioRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Usuario con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._usuarioRepository.update(id, updateUsuarioDto);
            const response = {
                message: `Usuario con id: ${id} actualizado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
    async remove(id) {
        const exists = await this._usuarioRepository.existsBy({ id: id });
        if (!exists) {
            return {
                message: `Usuario con id: ${id} no encontrado`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        else {
            await this._usuarioRepository.delete(id);
            const response = {
                message: `Autor con id: ${id} eliminado`,
                status: common_1.HttpStatus.OK,
            };
            return response;
        }
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map