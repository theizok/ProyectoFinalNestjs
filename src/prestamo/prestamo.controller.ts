import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoFinalDto } from './dto/create-prestamo.dto';

@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  create(@Body() createPrestamoDto: CreatePrestamoFinalDto) {
    return this.prestamoService.create(createPrestamoDto);
  }

  @Get()
  findAll() {
    return this.prestamoService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrestamoDto: CreatePrestamoFinalDto,
  ) {
    return this.prestamoService.update(+id, updatePrestamoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoService.remove(+id);
  }
}
