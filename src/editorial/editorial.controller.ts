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
import { EditorialService } from './editorial.service';
import { CreateEditorialDto, EditorialDto } from './dto/create-editorial.dto';

@Controller('editorial')
export class EditorialController {
  constructor(private readonly editorialService: EditorialService) {}

  @Post()
  create(@Body() createEditorialDto: CreateEditorialDto) {
    return this.editorialService.create(createEditorialDto);
  }

  @Get()
  findAll() {
    return plainToInstance(EditorialDto, this.editorialService.findAll(), {
      excludeExtraneousValues: true,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEditorialDto: CreateEditorialDto,
  ) {
    return this.editorialService.update(+id, updateEditorialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorialService.remove(+id);
  }
}
