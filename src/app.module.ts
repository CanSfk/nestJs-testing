import { Module } from '@nestjs/common';
import { TestingsModule } from './testings/testings.module';

@Module({
  imports: [TestingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
