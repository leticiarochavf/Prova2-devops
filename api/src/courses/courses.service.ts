import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Course } from './course.entity.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);

    return this.courseRepository.save(course);
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOneBy({ id });

    if (!course) {
      throw new NotFoundException('Curso não encontrado');
    }

    return course;
  }

  async update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ) {
    const course = await this.findOne(id);

    Object.assign(course, updateCourseDto);

    return this.courseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.findOne(id);

    return this.courseRepository.remove(course);
  }
}