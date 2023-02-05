"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainFuncClass = void 0;
const NewInst_1 = require("./NewInst");
class MainFuncClass {
    help() {
        console.log(NewInst_1.nwVar.DeleteFunctionText);
        console.log(NewInst_1.nwVar.FindByIdFunctionText);
        console.log(NewInst_1.nwVar.FindBynameFunctionText);
        console.log(NewInst_1.nwVar.ModifyFunctionText);
        console.log(NewInst_1.nwVar.SHOWALLFunctionText);
        console.log(NewInst_1.nwVar.addtasksFunctionText);
        console.log(NewInst_1.nwVar.clearFunctionText);
    }
    showall() {
        NewInst_1.NewlistClass.MainTaskList.slice(1).forEach(element => {
            console.log(`id : ${element.id} | name : ${element.name} |description : ${element.description}`);
        });
    }
    addtasks(data) {
        NewInst_1.NewlistClass.MainTaskList.push(data);
        console.log("success add");
    }
    DeleteFunc(id) {
        NewInst_1.NewlistClass.MainTaskList.slice(NewInst_1.NewlistClass.MainTaskList.indexOf(NewInst_1.NewlistClass.MainTaskList.filter(x => x.id == id)[0]));
        console.log("success delete");
    }
    FindById(id) {
        const IdResult = NewInst_1.NewlistClass.MainTaskList.filter(x => x.id == id)[0];
        console.log("founded!");
        return IdResult;
    }
    FindByname(name) {
        const nameResult = NewInst_1.NewlistClass.MainTaskList.filter(x => x.name == name)[0];
        console.log("founded!");
        return nameResult;
    }
    Modify(modificationType, newdata, id_) {
        const idResult = NewInst_1.NewlistClass.MainTaskList.filter(x => x.id == id_)[0];
        if (modificationType == "id") {
            idResult.id = newdata;
        }
        if (modificationType == "desc") {
            idResult.description = newdata;
        }
        if (modificationType == "name") {
            idResult.name = newdata;
        }
        console.log("success Modify");
    }
    EXIT() {
        process.exit();
    }
}
exports.MainFuncClass = MainFuncClass;
