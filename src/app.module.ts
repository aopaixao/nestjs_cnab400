import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnabModule } from './cnab/cnab.module';
import { CnabModule } from './cnab/cnab.module';

@Module({
  imports: [CnabModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
