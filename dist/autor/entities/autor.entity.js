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
exports.Autor = void 0;
const libro_entity_1 = require("../../libro/entities/libro.entity");
const typeorm_1 = require("typeorm");
let Autor = class Autor {
    id;
    name;
    age;
    libros;
};
exports.Autor = Autor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Autor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Autor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Autor.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => libro_entity_1.Libro, (libro) => libro.autor),
    __metadata("design:type", Array)
], Autor.prototype, "libros", void 0);
exports.Autor = Autor = __decorate([
    (0, typeorm_1.Entity)()
], Autor);
//# sourceMappingURL=autor.entity.js.map