import { Injectable,Inject} from '@nestjs/common';
import {Cat} from '../../entities/Cat.entity'
import { Repository } from 'typeorm';


/**Creamos un servicio que será inyectado en el controlador, para hacer esto posible
 * el servicio debe ser registrado en app.module.ts
 */
@Injectable()
export class CatserviceService {

    constructor(
        @Inject('CAT_REPOSITORY') private catRepo:Repository<Cat>
        ){}

    /*private readonly cats:Cat[]=[
        {id:1,nombre:'Nina',age:3,color:'blanco'},
        {id:2,nombre:'Pelusa',age:5,color:'blanco'},
        {id:3,nombre:'Powder',age:1,color:'negro'}
    ];*/


    create(cat:Cat){
       return this.catRepo.save(cat);
    }

      findAll():Promise<Cat[]>{
       return  this.catRepo.find();
    }

    findOne(id:number){
        return this.catRepo.findOneById(id);
    }

    deleteOne(id:number){
        return this.catRepo.delete(id);
    }

    update(cat:Cat){
        return this.catRepo.save(cat)
    }

}
