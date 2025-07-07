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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePrestamoFinalDto = exports.PrestamoIdDto = exports.PrestamoDto = exports.CreatePrestamoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const libro_entity_1 = require("../../libro/entities/libro.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
class CreatePrestamoDto {
    startedAt;
    usuario;
    libro;
}
exports.CreatePrestamoDto = CreatePrestamoDto;
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreatePrestamoDto.prototype, "startedAt", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => usuario_entity_1.Usuario),
    __metadata("design:type", usuario_entity_1.Usuario)
], CreatePrestamoDto.prototype, "usuario", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => libro_entity_1.Libro),
    __metadata("design:type", libro_entity_1.Libro)
], CreatePrestamoDto.prototype, "libro", void 0);
class PrestamoDto extends CreatePrestamoDto {
    id;
    endedAt;
}
exports.PrestamoDto = PrestamoDto;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PrestamoDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], PrestamoDto.prototype, "endedAt", void 0);
class PrestamoIdDto {
    id;
}
exports.PrestamoIdDto = PrestamoIdDto;
class CreatePrestamoFinalDto {
    startedAt;
    usuarioId;
    libroId;
    endedAt;
}
exports.CreatePrestamoFinalDto = CreatePrestamoFinalDto;
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreatePrestamoFinalDto.prototype, "startedAt", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreatePrestamoFinalDto.prototype, "usuarioId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreatePrestamoFinalDto.prototype, "libroId", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Object)
], CreatePrestamoFinalDto.prototype, "endedAt", void 0);
//# sourceMappingURL=create-prestamo.dto.js.map