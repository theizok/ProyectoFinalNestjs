"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamoModule = void 0;
const common_1 = require("@nestjs/common");
const prestamo_service_1 = require("./prestamo.service");
const prestamo_controller_1 = require("./prestamo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prestamo_entity_1 = require("./entities/prestamo.entity");
let PrestamoModule = class PrestamoModule {
};
exports.PrestamoModule = PrestamoModule;
exports.PrestamoModule = PrestamoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prestamo_entity_1.Prestamo])],
        controllers: [prestamo_controller_1.PrestamoController],
        providers: [prestamo_service_1.PrestamoService],
    })
], PrestamoModule);
//# sourceMappingURL=prestamo.module.js.map