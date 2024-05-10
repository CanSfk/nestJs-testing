import { Controller, Get } from '@nestjs/common';

@Controller('testings')
export class TestingsController {
  @Get()
  getHello() {
    return 'Hello World';
  }
}
