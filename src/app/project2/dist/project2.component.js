"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Project2Component = void 0;
var core_1 = require("@angular/core");
var Project2Component = /** @class */ (function () {
    function Project2Component() {
    }
    Project2Component.prototype.ngOnInit = function () {
    };
    Project2Component = __decorate([
        core_1.Component({
            selector: 'app-project2',
            templateUrl: './project2.component.html',
            styleUrls: ['./project2.component.scss']
        })
    ], Project2Component);
    return Project2Component;
}());
exports.Project2Component = Project2Component;
