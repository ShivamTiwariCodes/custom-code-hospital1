import { IHmsSdkFactory } from "../IHmsSdkFactory"; 
import { IUserService } from "../services/IUserService";
import { IAppointmentService } from  "../services/IAppointmentService";

export class CustomArgs<T extends Object> {

    id: string;
    args: T;
    userServiceFactory: IHmsSdkFactory<IUserService>;
    appointmentServiceFactory: IHmsSdkFactory<IAppointmentService>;

    constructor(
        id:string,
        args: T,
        userServiceFactory: IHmsSdkFactory<IUserService>,
        appointmentServiceFactory: IHmsSdkFactory<IAppointmentService>
    ) {
        this.id = id;
        this.args = args;
        this.userServiceFactory = userServiceFactory;
        this.appointmentServiceFactory = appointmentServiceFactory
    }
}