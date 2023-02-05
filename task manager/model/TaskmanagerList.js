"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTaskListClass = void 0;
const taskClass_1 = require("./taskClass");
class MainTaskListClass {
    constructor() {
        this.MainTaskList = [];
        const newitem = new taskClass_1.TaskClass;
        newitem.id = 0;
        newitem.name = "test";
        newitem.description = "test";
        this.MainTaskList.push(newitem);
    }
}
exports.MainTaskListClass = MainTaskListClass;
