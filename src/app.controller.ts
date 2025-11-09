import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStoDto } from './dto/create.sto';
import { TransformResponseInterceptor } from './core/interceptors/transform-response-interceptor.interceptor';
import { LoggingTimeInterceptor } from './core/interceptors/logging-time-interceptor';
import { BlockInterceptor } from './core/interceptors/block-interceptor';

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(@Body() createStoDto: CreateStoDto) {
    return this.appService.postHello(createStoDto);
  }

  @UseInterceptors(TransformResponseInterceptor, LoggingTimeInterceptor)
  @Get()
  getUsers() {
    return [{ id: 1, name: 'Alice' }];
  }

  @Patch()
  @UseInterceptors(BlockInterceptor)
  patchHello() {
    return {
      message: 'PATCH requests are not allowed outside business hours',
    };
  }

  @Get('error')
  getError() {
    throw new BadRequestException('Something bad happened', {
      cause: new Error(),
      description: 'Some error description',
    });
  }
}
