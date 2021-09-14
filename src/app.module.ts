import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnabModule } from './cnab/cnab.module';
import { CnabService } from './cnab/cnab.service';
import { CnabResolver } from './cnab/cnab.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CnabService, CnabResolver],
})
export class AppModule {}
