import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";
import { IAppointment } from "hms-core-sdk/dist/interfaces/IAppointment";

export const updateAppointmentHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const {id, args, appointmentServiceFactory} = customArgs;
        const appointmentService = appointmentServiceFactory.getInstance();
        const { fieldsToUpdate, appointment } = args;

        if(typeof fieldsToUpdate === 'object') {
            Object.keys(fieldsToUpdate).forEach(field => {
                switch(field) {
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
}