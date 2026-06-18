import { Injectable } from '@nestjs/common';
import { CreateMoodInput } from './dto/create-mood.input';
import { UpdateMoodInput } from './dto/update-mood.input';

@Injectable()
export class MoodService {
  create(createMoodInput: CreateMoodInput) {
    return 'This action adds a new mood';
  }

  findAll() {
    return `This action returns all mood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mood`;
  }

  update(id: number, updateMoodInput: UpdateMoodInput) {
    return `This action updates a #${id} mood`;
  }

  remove(id: number) {
    return `This action removes a #${id} mood`;
  }
}
