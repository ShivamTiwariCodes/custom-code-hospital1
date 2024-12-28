import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export const preCreateUserHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { user } = args;

        const createdUser = userService.createUser(user);
        resolve(createdUser);
    });
} 