import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:30})
    nombre:string;

    @Column({length:20})
    color:string;

    @Column()
    age:number
}