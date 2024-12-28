import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export const getUserByIdHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { userId } = args;

        const user = userService.getUserById(userId);
        resolve(user);
    });
} 