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
exports.LibroIdDto = exports.LibroDto = exports.CreateLibroDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_autor_dto_1 = require("../../autor/dto/create-autor.dto");
const create_editorial_dto_1 = require("../../editorial/dto/create-editorial.dto");
const create_prestamo_dto_1 = require("../../prestamo/dto/create-prestamo.dto");
class CreateLibroDto {
    title;
    releasedAt;
    avaliable;
}
exports.CreateLibroDto = CreateLibroDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLibroDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateLibroDto.prototype, "releasedAt", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLibroDto.prototype, "avaliable", void 0);
class LibroDto extends CreateLibroDto {
    id;
    editoriales;
    autor;
    prestamos;
}
exports.LibroDto = LibroDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LibroDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_editorial_dto_1.EditorialNombreDto),
    __metadata("design:type", Array)
], LibroDto.prototype, "editoriales", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_autor_dto_1.AutorNombreDto),
    __metadata("design:type", create_autor_dto_1.AutorNombreDto)
], LibroDto.prototype, "autor", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_prestamo_dto_1.PrestamoIdDto),
    __metadata("design:type", Array)
], LibroDto.prototype, "prestamos", void 0);
class LibroIdDto {
    id;
}
exports.LibroIdDto = LibroIdDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LibroIdDto.prototype, "id", void 0);
//# sourceMappingURL=create-libro.dto.js.map