import { Module } from '@nestjs/common';
import { LibroModule } from './libro/libro.module';
import { AutorModule } from './autor/autor.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EditorialModule } from './editorial/editorial.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST')!,
        port: parseInt(configService.get<string>('DB_PORT')!, 10),
        username: configService.get<string>('DB_USER')!,
        password: configService.get<string>('DB_PASSWORD')!,
        database: configService.get<string>('DB_NAME')!,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),

    LibroModule,
    UsuarioModule,
    AutorModule,
    EditorialModule,
    PrestamoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
