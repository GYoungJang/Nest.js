import { IsNumber, IsOptional, IsString } from 'class-validator';

export class createMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // 모든 요소를 하나씩 검사
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
