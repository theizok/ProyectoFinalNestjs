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
exports.Editorial = void 0;
const typeorm_1 = require("typeorm");
const libro_entity_1 = require("../../libro/entities/libro.entity");
let Editorial = class Editorial {
    id;
    name;
    address;
    libros;
};
exports.Editorial = Editorial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Editorial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Editorial.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Editorial.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => libro_entity_1.Libro, (libro) => libro.editoriales),
    __metadata("design:type", Array)
], Editorial.prototype, "libros", void 0);
exports.Editorial = Editorial = __decorate([
    (0, typeorm_1.Entity)()
], Editorial);
//# sourceMappingURL=editorial.entity.js.map