import { createMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(createMovieDto) {}
