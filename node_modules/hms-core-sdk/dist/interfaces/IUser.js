"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Patient"] = 0] = "Patient";
    UserRole[UserRole["Doctor"] = 1] = "Doctor";
    UserRole[UserRole["Admin"] = 2] = "Admin";
})(UserRole || (exports.UserRole = UserRole = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Non_binary"] = 2] = "Non_binary";
    Gender[Gender["Other"] = 3] = "Other";
})(Gender || (exports.Gender = Gender = {}));
