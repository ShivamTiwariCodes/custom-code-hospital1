"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preCreateAppointmentHandler = void 0;
const preCreateAppointmentHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, appointmentServiceFactory } = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { appointment } = args;
        const createdAppointment = appointmentService.createAppointment(appointment);
        resolve(createdAppointment);
    });
};
exports.preCreateAppointmentHandler = preCreateAppointmentHandler;
