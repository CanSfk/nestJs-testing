import { Module } from '@nestjs/common';
import { TestingsController } from './controllers/testings/testings.controller';
import { TestingsService } from './services/testings/testings.service';

@Module({
  controllers: [TestingsController],
  providers: [
    {
      provide: 'TESTINGS_SERVICE',
      useClass: TestingsService,
    },
  ],
})
export class TestingsModule {}
