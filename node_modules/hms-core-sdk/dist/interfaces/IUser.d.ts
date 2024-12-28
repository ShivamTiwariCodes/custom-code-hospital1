export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    role: UserRole;
    password: string;
    address?: string;
    dateOfBirth?: string;
    gender?: Gender;
    profileImage?: string;
}
export interface IPatient extends IUser {
    medicalHistory?: string[];
    insuranceDetails?: {
        provider: string;
        policyNumber: string;
    };
    emergencyContact?: {
        name: string;
        phoneNumber: string;
    };
    allergies?: string[];
    preferredDoctor?: string;
}
export interface IDoctor extends IUser {
    specialization: string;
    licenseNumber: string;
    yearsOfExperience: number;
    availabilitySchedule: {
        day: string;
        startTime: string;
        endTime: string;
    }[];
    rating?: number;
    hospitalDepartment: string;
}
export interface IAdmin extends IUser {
    employeeId: string;
    department: string;
}
export declare enum UserRole {
    Patient = 0,
    Doctor = 1,
    Admin = 2
}
export declare enum Gender {
    Male = 0,
    Female = 1,
    Non_binary = 2,
    Other = 3
}
