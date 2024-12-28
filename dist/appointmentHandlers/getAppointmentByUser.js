"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentByIdHandler = void 0;
const getAppointmentByIdHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, appointmentServiceFactory } = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { userId } = args;
        const appointment = appointmentService.getAppointmentsByUser(userId);
        resolve(appointment);
    });
};
exports.getAppointmentByIdHandler = getAppointmentByIdHandler;
