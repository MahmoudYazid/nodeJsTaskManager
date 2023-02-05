
import { ItaskFunc } from "./Ifunc";
import { NewlistClass, nwVar } from "./NewInst";
import { TaskClass } from "./taskClass";


export class MainFuncClass implements ItaskFunc{
    help():void{
        console.log(nwVar.DeleteFunctionText);
        console.log(nwVar.FindByIdFunctionText);
        console.log(nwVar.FindBynameFunctionText);
        console.log(nwVar.ModifyFunctionText);
        console.log(nwVar.SHOWALLFunctionText);
        console.log(nwVar.addtasksFunctionText);
        console.log(nwVar.clearFunctionText);
    }
   
   
    showall(): void {
        NewlistClass.MainTaskList.slice(1,).forEach(element => {
            console.log(`id : ${element.id} | name : ${element.name} |description : ${element.description}`);         
        });
        
    }
     
    addtasks(data: TaskClass): void {
        NewlistClass.MainTaskList.push(data);
        console.log("success add");  
    }
    DeleteFunc(id: number): void {
        NewlistClass.MainTaskList.slice(NewlistClass.MainTaskList.indexOf(NewlistClass.MainTaskList.filter(x => x.id == id)[0]));
        console.log("success delete");
    }

    FindById(id: number): TaskClass {
        const IdResult = NewlistClass.MainTaskList.filter(x => x.id == id)[0];
        console.log("founded!");
        return IdResult;  
        
    }

    FindByname(name: string): TaskClass {
        const nameResult = NewlistClass.MainTaskList.filter(x => x.name == name)[0];
        console.log("founded!");
        return nameResult;
        
    }

    Modify(modificationType: any, newdata: any,id_:number): void {
        const idResult = NewlistClass.MainTaskList.filter(x => x.id == id_)[0];
        if(modificationType=="id"){ idResult.id=newdata;}
        if(modificationType=="desc"){idResult.description=newdata;}
        if(modificationType=="name"){idResult.name=newdata;}
        console.log("success Modify");
    }
    EXIT(): void {
        process.exit();
    }
    
    

}