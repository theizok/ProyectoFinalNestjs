import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLibroDto, LibroDto } from './dto/create-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { ResponseLibroDto } from './dto/response-libro.dto';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly _libroRepository: Repository<Libro>,
  ) {}

  async create(createLibroDto: CreateLibroDto): Promise<ResponseLibroDto> {
    const libro = this._libroRepository.create(createLibroDto);

    await this._libroRepository.save(libro);

    const response: ResponseLibroDto = {
      message: `Libro creado exitosamente`,
      status: HttpStatus.CREATED,
    };
    return response;
  }

  findAll(): Promise<LibroDto[]> {
    return this._libroRepository.find();
  }

  async update(
    id: number,
    createLibroDto: CreateLibroDto,
  ): Promise<ResponseLibroDto> {
    const exists = await this._libroRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Libro con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._libroRepository.update(id, createLibroDto);
      const response: ResponseLibroDto = {
        message: `Libro con id: ${id} actualizado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }

  async remove(id: number): Promise<ResponseLibroDto> {
    const exists = await this._libroRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Libro con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._libroRepository.delete(id);
      const response: ResponseLibroDto = {
        message: `Libro con id: ${id} eliminado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }
}
