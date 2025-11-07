import { Injectable, Post } from '@nestjs/common';
import { CreateStoDto } from './dto/create.sto';

@Injectable()
export class AppService {
  @Post()
  postHello(createStoDto: CreateStoDto) {
    return createStoDto;
  }
}
