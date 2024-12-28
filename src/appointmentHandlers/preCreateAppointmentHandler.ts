import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export const preCreateAppointmentHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const { id, args, appointmentServiceFactory } = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { appointment } = args;

        const createdAppointment = appointmentService.createAppointment(appointment);
        resolve(createdAppointment);
    });
} 