import { IAppointment, AppointmentStatus, ConsultationType } from "../interfaces/IAppointment";
export interface IAppointmentService {
    createAppointment(appointment: IAppointment): Promise<IAppointment>;
    getAppointmentsByUser(userId: string): Promise<IAppointment[]>;
    updateAppointmentStatus(appointment: IAppointment, status: AppointmentStatus): Promise<IAppointment>;
    updateConsultationType(appointment: IAppointment, consultationType: ConsultationType): Promise<IAppointment>;
}
