"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const libro_module_1 = require("./libro/libro.module");
const autor_module_1 = require("./autor/autor.module");
const usuario_module_1 = require("./usuario/usuario.module");
const editorial_module_1 = require("./editorial/editorial.module");
const prestamo_module_1 = require("./prestamo/prestamo.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: parseInt(configService.get('DB_PORT'), 10),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
            }),
            libro_module_1.LibroModule,
            usuario_module_1.UsuarioModule,
            autor_module_1.AutorModule,
            editorial_module_1.EditorialModule,
            prestamo_module_1.PrestamoModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map