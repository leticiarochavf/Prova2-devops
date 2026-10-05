import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from '../dto/create-course.dto.js';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}