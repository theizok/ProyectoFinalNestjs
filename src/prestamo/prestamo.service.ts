import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoFinalDto, PrestamoDto } from './dto/create-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';
import { ResponsePrestamoDto } from './dto/response-prestamo.dto';
import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly _prestamoRepository: Repository<Prestamo>,
  ) {}

  async create(
    createPrestamoDto: CreatePrestamoFinalDto,
  ): Promise<ResponsePrestamoDto> {
    const usuario = await this._prestamoRepository.manager.findOneByOrFail(
      Usuario,
      { id: createPrestamoDto.usuarioId },
    );

    const libro = await this._prestamoRepository.manager.findOneByOrFail(
      Libro,
      { id: createPrestamoDto.libroId },
    );

    const prestamo = this._prestamoRepository.create({
      startedAt: createPrestamoDto.startedAt,
      usuario,
      libro,
    });

    await this._prestamoRepository.save(prestamo);

    return {
      message: 'Prestamo creado',
      status: HttpStatus.CREATED,
    };
  }

  findAll(): Promise<PrestamoDto[]> {
    return this._prestamoRepository.find();
  }

  async update(
    id: number,
    updatePrestamoDto: CreatePrestamoFinalDto,
  ): Promise<ResponsePrestamoDto> {
    const exists = await this._prestamoRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Prestamo con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._prestamoRepository.update(id, {
        startedAt: new Date(updatePrestamoDto.startedAt),
        endedAt: updatePrestamoDto.endedAt
          ? new Date(updatePrestamoDto.endedAt)
          : null,
        usuario: { id: updatePrestamoDto.usuarioId },
        libro: { id: updatePrestamoDto.libroId },
      });
      const response: ResponsePrestamoDto = {
        message: `Prestamo con id: ${id} actualizado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }

  async remove(id: number): Promise<ResponsePrestamoDto> {
    const exists = await this._prestamoRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Prestamo con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._prestamoRepository.delete(id);
      const response: ResponsePrestamoDto = {
        message: `Prestamo con id: ${id} eliminado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }
}
