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
exports.AutorController = void 0;
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const autor_service_1 = require("./autor.service");
const create_autor_dto_1 = require("./dto/create-autor.dto");
let AutorController = class AutorController {
    autorService;
    constructor(autorService) {
        this.autorService = autorService;
    }
    create(createAutorDto) {
        return this.autorService.create(createAutorDto);
    }
    findAll() {
        return (0, class_transformer_1.plainToInstance)(create_autor_dto_1.AutorDto, this.autorService.findAll(), {
            excludeExtraneousValues: true,
        });
    }
    findOne(id) {
        return (0, class_transformer_1.plainToInstance)(create_autor_dto_1.AutorDto, this.autorService.findOne(+id), {
            excludeExtraneousValues: true,
        });
    }
    update(id, createAutorDto) {
        return this.autorService.update(+id, createAutorDto);
    }
    remove(id) {
        return this.autorService.remove(+id);
    }
};
exports.AutorController = AutorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_autor_dto_1.CreateAutorDto]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_autor_dto_1.CreateAutorDto]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "remove", null);
exports.AutorController = AutorController = __decorate([
    (0, common_1.Controller)('autor'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
//# sourceMappingURL=autor.controller.js.map