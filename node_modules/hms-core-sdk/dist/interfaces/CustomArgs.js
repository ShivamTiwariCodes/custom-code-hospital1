"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomArgs = void 0;
class CustomArgs {
    constructor(id, args, userServiceFactory, appointmentServiceFactory) {
        this.id = id;
        this.args = args;
        this.userServiceFactory = userServiceFactory;
        this.appointmentServiceFactory = appointmentServiceFactory;
    }
}
exports.CustomArgs = CustomArgs;
