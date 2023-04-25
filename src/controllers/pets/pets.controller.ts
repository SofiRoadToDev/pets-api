import { Controller,Get,Post,Body,Param,ParseIntPipe, HttpException, HttpStatus,Delete,Put} from '@nestjs/common';
import { CatserviceService } from 'src/services/catservice/catservice.service';
import { Cat } from '../../entities/Cat.entity';
import { log } from 'console';
@Controller('pets')
export class PetsController {

    /**Se utiliza la inyección de dependencias mediante el constructor, si hay mas formas pero me gusta esta */
    constructor(private catService:CatserviceService){}

    @Get()
        async getAll():Promise<Cat[]>{
        let cats:Cat[]=[];
        try {
         cats=await this.catService.findAll();
        } catch (error) {
            throw new Error('no hay michis')
        }
        
         return cats;

    }

    @Post()
    async create(@Body() cat:Cat){
        try {
           
            return  await this.catService.create(cat);
        } catch (error) {
            throw new Error('Error al crear el gato')
        }
       

        
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.catService.findOne(id);
        } catch (error) {
            throw new HttpException(
                {
                    status:HttpStatus.NOT_FOUND,
                    error:`id: ${id} not found in pets list`
                },
                HttpStatus.NOT_FOUND),
                {cause:error}
        }
       
    }

    @Delete(':id')
    async deleteCat(@Param('id',ParseIntPipe) id: number){
        return this.catService.deleteOne(id);
    }

    @Put()
    async updateCat(@Body() cat:Cat){
        return this.catService.update(cat)
    }
}
