import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { createMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// 컨트롤러의 이름이 url만듦
// url의 entry point
// @Controller()
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  // Param 데코레이터를 사용하면 NestJs가
  // url에 있는 id parameter를 알려줘..
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  // Body 데코레이터는 movieData안의 리퀘스트 body를 가져온다.
  create(@Body() movieData: createMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
