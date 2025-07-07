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
exports.Libro = void 0;
const typeorm_1 = require("typeorm");
const editorial_entity_1 = require("../../editorial/entities/editorial.entity");
const autor_entity_1 = require("../../autor/entities/autor.entity");
const prestamo_entity_1 = require("../../prestamo/entities/prestamo.entity");
let Libro = class Libro {
    id;
    title;
    releasedAt;
    avaliable;
    editoriales;
    autor;
    prestamos;
};
exports.Libro = Libro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Libro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Libro.prototype, "releasedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Libro.prototype, "avaliable", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => editorial_entity_1.Editorial, (editorial) => editorial.libros),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Libro.prototype, "editoriales", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => autor_entity_1.Autor, (autor) => autor.libros),
    __metadata("design:type", autor_entity_1.Autor)
], Libro.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestamo_entity_1.Prestamo, (prestamo) => prestamo.libro),
    __metadata("design:type", Array)
], Libro.prototype, "prestamos", void 0);
exports.Libro = Libro = __decorate([
    (0, typeorm_1.Entity)()
], Libro);
//# sourceMappingURL=libro.entity.js.map