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
exports.LibroController = void 0;
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const libro_service_1 = require("./libro.service");
const create_libro_dto_1 = require("./dto/create-libro.dto");
let LibroController = class LibroController {
    libroService;
    constructor(libroService) {
        this.libroService = libroService;
    }
    create(createLibroDto) {
        return (0, class_transformer_1.plainToInstance)(create_libro_dto_1.LibroDto, this.libroService.create(createLibroDto), {
            excludeExtraneousValues: true,
        });
    }
    findAll() {
        return this.libroService.findAll();
    }
    update(id, updateLibroDto) {
        return this.libroService.update(+id, updateLibroDto);
    }
    remove(id) {
        return this.libroService.remove(+id);
    }
};
exports.LibroController = LibroController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_libro_dto_1.CreateLibroDto]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_libro_dto_1.CreateLibroDto]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "remove", null);
exports.LibroController = LibroController = __decorate([
    (0, common_1.Controller)('libro'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
//# sourceMappingURL=libro.controller.js.map