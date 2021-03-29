"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    var createCourseService = new CreateCourseService_1.default();
    createCourseService.execute('NodeJS', 10, 'Vítor');
    return response.send();
}
exports.createCourse = createCourse;
