import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(1)
  hours: number;

  @IsString()
  @IsNotEmpty()
  modality: string;
}