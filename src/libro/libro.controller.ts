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
import { LibroService } from './libro.service';
import { CreateLibroDto, LibroDto } from './dto/create-libro.dto';

@Controller('libro')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return plainToInstance(LibroDto, this.libroService.create(createLibroDto), {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  findAll() {
    return this.libroService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: CreateLibroDto) {
    return this.libroService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id);
  }
}
