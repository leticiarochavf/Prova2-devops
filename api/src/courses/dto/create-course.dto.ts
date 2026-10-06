import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ example: 'ADS001' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    example: 'Análise e Desenvolvimento de Sistemas',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 2400 })
  @IsInt()
  @Min(1)
  hours: number;

  @ApiProperty({ example: 'Presencial' })
  @IsString()
  @IsNotEmpty()
  modality: string;
}