export interface IAppointment {
    id: string;
    patientId: string;
    doctorId: string;
    appointmentDateTime: string; // ISO format (YYYY-MM-DDTHH:mm:ss)
    status: AppointmentStatus;
    reasonForVisit: string;
    notes?: string;
    createdAt: string; // ISO format
    updatedAt: string; // ISO format
    prescription?: {
        medicine: string;
        dosage: string; // e.g., "1 tablet twice a day"
        duration: string; // e.g., "7 days"
    }[];
    testResults?: {
        testName: string;
        result: string; // e.g., "Normal"
        date: string; // ISO format
    }[];
    consultationType?: ConsultationType;
    duration?: number; // Duration in minutes
    paymentDetails?: {
        amount: number;
        method: "Cash" | "Card" | "Online";
        status: "Paid" | "Pending";
    };
}

export enum AppointmentStatus {
    Scheduled,
    Completed,
    Cancelled
}

export enum ConsultationType {
    In_person,
    Online
}