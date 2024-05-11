import { Module } from '@nestjs/common';
import { TestingsModule } from './testings/testings.module';
import { TestingsService } from './testings/services/testings/testings.service';

@Module({
  imports: [TestingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
