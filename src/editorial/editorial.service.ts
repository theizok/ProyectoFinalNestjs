import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Editorial } from './entities/editorial.entity';
import { Repository } from 'typeorm';
import { ResponseEditorialDto } from './dto/response-editorial.dto';

@Injectable()
export class EditorialService {
  constructor(
    @InjectRepository(Editorial)
    private readonly _editorialRepository: Repository<Editorial>,
  ) {}

  //Crear editorial
  async create(
    createEditorialDto: CreateEditorialDto,
  ): Promise<ResponseEditorialDto> {
    const editorial = this._editorialRepository.create(createEditorialDto);

    await this._editorialRepository.save(editorial);

    const response: ResponseEditorialDto = {
      message: 'Editorial creada',
      status: HttpStatus.CREATED,
    };
    return response;
  }

  //Traer todas las editoriales
  findAll() {
    return this._editorialRepository.find();
  }

  //Actualizar editorial
  async update(
    id: number,
    createEditorialDto: CreateEditorialDto,
  ): Promise<ResponseEditorialDto> {
    const exists = await this._editorialRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Editorial con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._editorialRepository.update(id, createEditorialDto);
      const response: ResponseEditorialDto = {
        message: `Editorial con id: ${id} actualizado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }

  //Eliminar editorial
  async remove(id: number): Promise<ResponseEditorialDto> {
    const exists = await this._editorialRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Editorial con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._editorialRepository.delete(id);
      const response: ResponseEditorialDto = {
        message: `Editorial con id: ${id} eliminado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }
}
