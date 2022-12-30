import { Get, Post, Put, Delete } from '@nestjs/common';
import { Controller, Patch } from '@nestjs/common';
import { Param, UseFilters } from '@nestjs/common/decorators';
import { HttpException } from '@nestjs/common/exceptions';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpException)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param() param) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
