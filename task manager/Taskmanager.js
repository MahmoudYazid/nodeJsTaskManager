"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskClass_1 = require("../task manager/model/taskClass");
const NewInst_1 = require("../task manager/model/NewInst");
const prompt = require('prompt-sync')();
while (true) {
    switch (String(prompt("write the code:   "))) {
        case NewInst_1.nwVar.helpFunctionText:
            NewInst_1.Mainfuncclassinst.help();
            break;
        case NewInst_1.nwVar.exitFunctionText:
            NewInst_1.Mainfuncclassinst.EXIT();
            break;
        case NewInst_1.nwVar.DeleteFunctionText:
            const deletedid = String(prompt("id of task:   "));
            NewInst_1.Mainfuncclassinst.DeleteFunc(Number(deletedid));
            break;
        case NewInst_1.nwVar.FindByIdFunctionText:
            const Wantedid = String(prompt("id of task:  "));
            console.log(NewInst_1.Mainfuncclassinst.FindById(Number(Wantedid)));
            break;
        case NewInst_1.nwVar.FindBynameFunctionText:
            const WantedName = String(prompt("name of task:   "));
            console.log(NewInst_1.Mainfuncclassinst.FindByname(String(WantedName)));
            break;
        case NewInst_1.nwVar.ModifyFunctionText:
            const modtype = String(prompt("need to modify what:   "));
            const id_wanted = String(prompt("id for task:   "));
            const newdata = String(prompt("data :   "));
            NewInst_1.Mainfuncclassinst.Modify(String(modtype), String(newdata), Number(id_wanted));
            break;
        case NewInst_1.nwVar.addtasksFunctionText:
            const newname = String(prompt("write the name:  "));
            const newdesc = String(prompt("write the description:   "));
            const newid_ = NewInst_1.NewlistClass.MainTaskList.length + 1 - 1;
            const newinst = new taskClass_1.TaskClass;
            newinst.id = newid_;
            newinst.name = newname;
            newinst.description = newdesc;
            NewInst_1.Mainfuncclassinst.addtasks(newinst);
            break;
        case NewInst_1.nwVar.clearFunctionText:
            console.clear();
            break;
        case NewInst_1.nwVar.SHOWALLFunctionText:
            NewInst_1.Mainfuncclassinst.showall();
            break;
        default:
            console.log(`this code is not exist use ${NewInst_1.nwVar.helpFunctionText} to know th codes you can use`);
            break;
    }
}
