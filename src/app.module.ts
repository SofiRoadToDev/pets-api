import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './controllers/pets/pets.controller';
import { CatserviceService } from './services/catservice/catservice.service';
import {DatabaseModule} from './modules/database.modules';




@Module({
  imports: [DatabaseModule],
  controllers: [AppController, PetsController],
  providers: [AppService, CatserviceService],
 
})
export class AppModule {}
