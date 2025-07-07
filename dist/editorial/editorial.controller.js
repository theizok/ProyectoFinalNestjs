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
exports.EditorialController = void 0;
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const editorial_service_1 = require("./editorial.service");
const create_editorial_dto_1 = require("./dto/create-editorial.dto");
let EditorialController = class EditorialController {
    editorialService;
    constructor(editorialService) {
        this.editorialService = editorialService;
    }
    create(createEditorialDto) {
        return this.editorialService.create(createEditorialDto);
    }
    findAll() {
        return (0, class_transformer_1.plainToInstance)(create_editorial_dto_1.EditorialDto, this.editorialService.findAll(), {
            excludeExtraneousValues: true,
        });
    }
    update(id, updateEditorialDto) {
        return this.editorialService.update(+id, updateEditorialDto);
    }
    remove(id) {
        return this.editorialService.remove(+id);
    }
};
exports.EditorialController = EditorialController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_editorial_dto_1.CreateEditorialDto]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_editorial_dto_1.CreateEditorialDto]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "remove", null);
exports.EditorialController = EditorialController = __decorate([
    (0, common_1.Controller)('editorial'),
    __metadata("design:paramtypes", [editorial_service_1.EditorialService])
], EditorialController);
//# sourceMappingURL=editorial.controller.js.map