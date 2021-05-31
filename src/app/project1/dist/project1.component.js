"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Project1Component = void 0;
var core_1 = require("@angular/core");
var Project1Component = /** @class */ (function () {
    function Project1Component() {
    }
    Project1Component.prototype.ngOnInit = function () {
    };
    Project1Component = __decorate([
        core_1.Component({
            selector: 'app-project1',
            templateUrl: './project1.component.html',
            styleUrls: ['./project1.component.scss']
        })
    ], Project1Component);
    return Project1Component;
}());
exports.Project1Component = Project1Component;
