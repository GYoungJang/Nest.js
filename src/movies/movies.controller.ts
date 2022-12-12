import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

// 컨트롤러의 이름이 url만듦
// url의 entry point
// @Controller()
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  // Param 데코레이터를 사용하면 NestJs가
  // url에 있는 id parameter를 알려줘..
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
