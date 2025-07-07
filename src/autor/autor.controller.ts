import { plainToInstance } from 'class-transformer';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorDto, CreateAutorDto } from './dto/create-autor.dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return plainToInstance(AutorDto, this.autorService.findAll(), {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return plainToInstance(AutorDto, this.autorService.findOne(+id), {
      excludeExtraneousValues: true,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createAutorDto: CreateAutorDto) {
    return this.autorService.update(+id, createAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
