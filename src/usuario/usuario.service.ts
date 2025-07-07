import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto, UsuarioDto } from './dto/create-usuario.dto';
import { ResponseUsuarioDto } from './dto/response-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly _usuarioRepository: Repository<Usuario>,
  ) {}

  async create(
    createUsuarioDto: CreateUsuarioDto,
  ): Promise<ResponseUsuarioDto> {
    const usuario = this._usuarioRepository.create(createUsuarioDto);

    await this._usuarioRepository.save(usuario);

    const response: ResponseUsuarioDto = {
      message: 'Usuario creado',
      status: HttpStatus.CREATED,
    };
    return response;
  }

  findAll(): Promise<UsuarioDto[]> {
    return this._usuarioRepository.find();
  }

  async update(
    id: number,
    updateUsuarioDto: CreateUsuarioDto,
  ): Promise<ResponseUsuarioDto> {
    const exists = await this._usuarioRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Usuario con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._usuarioRepository.update(id, updateUsuarioDto);
      const response: ResponseUsuarioDto = {
        message: `Usuario con id: ${id} actualizado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }

  async remove(id: number): Promise<ResponseUsuarioDto> {
    const exists = await this._usuarioRepository.existsBy({ id: id });
    if (!exists) {
      return {
        message: `Usuario con id: ${id} no encontrado`,
        status: HttpStatus.NOT_FOUND,
      };
    } else {
      await this._usuarioRepository.delete(id);
      const response: ResponseUsuarioDto = {
        message: `Autor con id: ${id} eliminado`,
        status: HttpStatus.OK,
      };
      return response;
    }
  }
}
