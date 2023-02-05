
import { TaskClass } from './taskClass';
export interface ItaskFunc{
    addtasks(data:TaskClass):void,
    DeleteFunc(id:number):void,
    FindById(id:number):TaskClass,
    FindByname(name:string):TaskClass,
    Modify(modificationType:any,newdata:any,id_:number):void,
    showall():void,
    help():void,
    EXIT():void
}