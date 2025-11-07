import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStoDto } from './dto/create.sto';

@Controller('stos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(@Body() createStoDto: CreateStoDto) {
    return this.appService.postHello(createStoDto);
  }
}
