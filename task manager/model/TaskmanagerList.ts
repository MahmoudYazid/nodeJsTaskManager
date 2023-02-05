import { TaskClass } from "./taskClass";

export class MainTaskListClass{
    MainTaskList:TaskClass[]=[];
    
    constructor(){
        const newitem=new TaskClass;
        newitem.id=0;
        newitem.name="test";
        newitem.description="test";
        this.MainTaskList.push(newitem);
    }
    

}



