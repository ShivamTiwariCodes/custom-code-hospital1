"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preCreateUserHandler = void 0;
const preCreateUserHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { user } = args;
        userService.createUser(user)
            .then(createdUser => {
            resolve(createdUser);
        })
            .catch(err => {
            reject(err);
        });
    });
};
exports.preCreateUserHandler = preCreateUserHandler;
