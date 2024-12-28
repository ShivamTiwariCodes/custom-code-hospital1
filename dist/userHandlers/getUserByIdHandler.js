"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdHandler = void 0;
const getUserByIdHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { userId } = args;
        const user = userService.getUserById(userId);
        resolve(user);
    });
};
exports.getUserByIdHandler = getUserByIdHandler;
