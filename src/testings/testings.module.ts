import { Module } from '@nestjs/common';
import { TestingsController } from './controllers/testings/testings.controller';

@Module({
  controllers: [TestingsController]
})
export class TestingsModule {}
