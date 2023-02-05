
import { TaskClass } from "../task manager/model/taskClass";
import { nwVar,Mainfuncclassinst,NewlistClass } from "../task manager/model/NewInst";




const prompt = require('prompt-sync')();

while(true){

    
    switch (String(prompt("write the code:   "))) {

      case nwVar.helpFunctionText:
        Mainfuncclassinst.help();
        break;
      

      case nwVar.exitFunctionText:
        Mainfuncclassinst.EXIT();
        break;
        

      case nwVar.DeleteFunctionText:
        const deletedid= String( prompt("id of task:   ")); 
        Mainfuncclassinst.DeleteFunc(Number(deletedid))
      

        break;
      
      
      case nwVar.FindByIdFunctionText:
        const Wantedid= String( prompt("id of task:  ")); 
        console.log(Mainfuncclassinst.FindById(Number(Wantedid)));
        break;
      
      
      case nwVar.FindBynameFunctionText:
        const WantedName= String( prompt("name of task:   ")); 
        console.log(Mainfuncclassinst.FindByname(String(WantedName)));
        break;
      
      
      
      case nwVar.ModifyFunctionText:
        const modtype= String( prompt("need to modify what:   "));
        const id_wanted= String( prompt("id for task:   "));
        const newdata= String( prompt("data :   "));
        Mainfuncclassinst.Modify(String(modtype),String(newdata),Number(id_wanted));
        break;
      
     
     
      case nwVar.addtasksFunctionText:
        const newname= String( prompt("write the name:  "));
        const newdesc= String( prompt("write the description:   "));
        const newid_= NewlistClass.MainTaskList.length+1-1;
        const newinst= new TaskClass;
        newinst.id=newid_;
        newinst.name=newname;
        newinst.description=newdesc;
        Mainfuncclassinst.addtasks(newinst);
        break;
      
      
     
     
      case nwVar.clearFunctionText:
        console.clear();
        break;
      
      
      case nwVar.SHOWALLFunctionText:
        Mainfuncclassinst.showall();
        break;
      
      default:
        console.log(`this code is not exist use ${nwVar.helpFunctionText} to know th codes you can use`);
        break;
        

        
    }

}


