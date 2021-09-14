import { Module } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { CnabResolver } from './cnab.resolver';

@Module({
  providers: [CnabService, CnabResolver]
})
export class CnabModule {}
