export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: UserRole;
    password: string;
    address?: string;
    dateOfBirth?: string; // ISO format (YYYY-MM-DD)
    gender?: Gender;
    profileImage?: string;
}

export interface IPatient extends IUser {
    medicalHistory?: string[]; // List of medical records/summary
    insuranceDetails?: {
        provider: string;
        policyNumber: string;
    };
    emergencyContact?: {
        name: string;
        phoneNumber: string;
    };
    allergies?: string[];
    preferredDoctor?: string; // Doctor ID
}

export interface IDoctor extends IUser {
    specialization: string;
    licenseNumber: string;
    yearsOfExperience: number;
    availabilitySchedule: {
        day: string; // e.g., "Monday"
        startTime: string; // e.g., "09:00"
        endTime: string; // e.g., "17:00"
    }[];
    rating?: number; // Average rating (optional)
    hospitalDepartment: string;
}


export interface IAdmin extends IUser {
    employeeId: string;
    department: string;
}

export enum UserRole {
    Patient,
    Doctor,
    Admin
}

export enum Gender {
    Male,
    Female,
    Non_binary,
    Other
}