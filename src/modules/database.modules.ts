
import { Module } from '@nestjs/common';
import { databaseProviders } from '../providers/database.providers';
import {catProviders} from '../providers/cat.provider';

@Module({
  providers: [...databaseProviders,...catProviders],
  exports: [...databaseProviders,...catProviders],
})
export class DatabaseModule {}
