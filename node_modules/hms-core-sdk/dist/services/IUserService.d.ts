import { IUser } from "../interfaces/IUser";
export interface IUserService {
    createUser(user: IUser): Promise<IUser>;
    getUserById(id: string): Promise<IUser>;
    updatePhone(user: IUser, phone: string): Promise<IUser>;
    updateAddress(user: IUser, address: string): Promise<IUser>;
}
