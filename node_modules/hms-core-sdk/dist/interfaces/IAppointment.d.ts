export interface IAppointment {
    id: string;
    patientId: string;
    doctorId: string;
    appointmentDateTime: string;
    status: AppointmentStatus;
    reasonForVisit: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
    prescription?: {
        medicine: string;
        dosage: string;
        duration: string;
    }[];
    testResults?: {
        testName: string;
        result: string;
        date: string;
    }[];
    consultationType?: ConsultationType;
    duration?: number;
    paymentDetails?: {
        amount: number;
        method: "Cash" | "Card" | "Online";
        status: "Paid" | "Pending";
    };
}
export declare enum AppointmentStatus {
    Scheduled = 0,
    Completed = 1,
    Cancelled = 2
}
export declare enum ConsultationType {
    In_person = 0,
    Online = 1
}
