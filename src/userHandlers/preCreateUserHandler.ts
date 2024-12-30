import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export const preCreateUserHandler = (customArgs: CustomArgs<any>): Promise<any> => {
    return new Promise((resolve, reject) => {

        const { id, args, userServiceFactory } = customArgs;
        const userService = userServiceFactory.getInstance();
        const { user } = args;

        userService.createUser(user)
        .then(createdUser => {
            resolve(createdUser);
        })
        .catch(err => {
            reject(err);
        })

    });
} 