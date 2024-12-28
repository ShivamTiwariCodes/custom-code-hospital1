import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export const getAppointmentByIdHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const { id, args, appointmentServiceFactory } = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { userId } = args;

        const appointment = appointmentService.getAppointmentsByUser(userId);
        resolve(appointment);
    });
} 