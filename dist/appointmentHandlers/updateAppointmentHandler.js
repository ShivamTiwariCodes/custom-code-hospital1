"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppointmentHandler = void 0;
const updateAppointmentHandler = (customArgs) => {
    return new Promise((resolve, reject) => {
        const { id, args, appointmentServiceFactory } = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { fieldsToUpdate, appointment } = args;
        if (typeof fieldsToUpdate === 'object') {
            Object.keys(fieldsToUpdate).forEach(field => {
                switch (field) {
                    case "status":
                        appointmentService.updateAppointmentStatus(appointment, fieldsToUpdate['status']);
                        break;
                    case "consultationType":
                        appointmentService.updateConsultationType(appointment, fieldsToUpdate['status']);
                        break;
                    default:
                        console.log("Other features are under development ...");
                        reject("Other features are under development ...");
                }
            });
        }
        resolve(appointment);
    });
};
exports.updateAppointmentHandler = updateAppointmentHandler;
