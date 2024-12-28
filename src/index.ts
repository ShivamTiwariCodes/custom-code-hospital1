import { getAppointmentByIdHandler } from "./appointmentHandlers/getAppointmentByUser";
import { preCreateAppointmentHandler } from "./appointmentHandlers/preCreateAppointmentHandler";
import { updateAppointmentHandler } from "./appointmentHandlers/updateAppointmentHandler";
import { getUserByIdHandler } from "./userHandlers/getUserByIdHandler";
import { preCreateUserHandler } from "./userHandlers/preCreateUserHandler";
import { updateUserHandler } from "./userHandlers/updateUserHandler"; 

export const getAppointmentById = getAppointmentByIdHandler;
export const preCreateAppointment = preCreateAppointmentHandler;
export const updateAppointment = updateAppointmentHandler;
export const getUserById = getUserByIdHandler;
export const preCreateUser = preCreateUserHandler;
export const updateUser = updateUserHandler;