"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preCreateUserHandler = void 0;
const preCreateUserHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { user } = args;
        const createdUser = userService.createUser(user);
        resolve(createdUser);
    });
};
exports.preCreateUserHandler = preCreateUserHandler;
