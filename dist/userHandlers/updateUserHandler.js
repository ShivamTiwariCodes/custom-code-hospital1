"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHandler = void 0;
const updateUserHandler = (customArgs) => {
    const { id, args, userServiceFactory } = customArgs;
    const userService = userServiceFactory.getInstance();
    const { fieldsToUpdate, user } = args;
    return new Promise((resolve, reject) => {
        if (typeof fieldsToUpdate === 'object') {
            Object.keys(fieldsToUpdate).forEach(key => {
                switch (key) {
                    case "phoneNumber":
                        userService.updatePhone(user, fieldsToUpdate['phone']);
                        break;
                    case "address":
                        userService.updateAddress(user, fieldsToUpdate['address']);
                        break;
                    default:
                        console.log("Other features are under development ...");
                        reject("Other features are under development ...");
                }
            });
        }
        resolve(user);
    });
};
exports.updateUserHandler = updateUserHandler;
