import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])], // ✅ Esto registra el repositorio
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
