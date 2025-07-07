import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAutorDto, AutorDto } from './dto/create-autor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { ResponseAutorDto } from './dto/response-autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly _autorRepository: Repository<Autor>,
  ) {}

  //Crear Autor
  async create(createAutorDto: CreateAutorDto): Promise<ResponseAutorDto> {
    const autor = this._autorRepository.create(createAutorDto);

    await this._autorRepository.save(autor);

    const response: ResponseAutorDto = {
      message: 'Autor creada',
      status: HttpStatus.CREATED,
    };
    return response;
  }

  //Traer todos los autores
  findAll(): Promise<AutorDto[]> {
    return this._autorRepository.find();
  }

  //Trae un autor por su id
  async findOne(id: number): Promise<AutorDto | null | ResponseAutorDto> {
    const exists = await this._autorRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Autor con id_: ${id} no encontrado}`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      return this._autorRepository.findOne({ where: { id: id } });
    }
  }

  //Actualizar autor
  async update(
    autorId: number,
    createAutorDto: CreateAutorDto,
  ): Promise<ResponseAutorDto> {
    const exists = await this._autorRepository.existsBy({ id: autorId });
    if (!exists) {
      return {
        message: `Autor con id: ${autorId} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._autorRepository.update(autorId, createAutorDto);
      const response: ResponseAutorDto = {
        message: `Autor con id: ${autorId} actualizado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }

  //Eliminar autor por id
  async remove(id: number): Promise<ResponseAutorDto> {
    const exists = await this._autorRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Autor con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._autorRepository.delete(id);
      const response: ResponseAutorDto = {
        message: `Autor con id: ${id} eliminado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }
}
