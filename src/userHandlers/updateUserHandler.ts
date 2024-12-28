import { IUserService } from 'hms-core-sdk/dist/services/IUserService';
import { CustomArgs } from 'hms-core-sdk/dist/interfaces/CustomArgs';

export const updateUserHandler = (customArgs: CustomArgs<any>): Promise<any> => {

    const {id, args, userServiceFactory} = customArgs;
    const userService: IUserService = userServiceFactory.getInstance();
    const { fieldsToUpdate, user } = args;

    return new Promise((resolve, reject) => {

        if(typeof fieldsToUpdate === 'object') {
            Object.keys(fieldsToUpdate).forEach(key => {
                switch(key) {
                    case "phoneNumber":
                        userService.updatePhone(user, fieldsToUpdate['phone']);
                        break;
                    case "address":
                        userService.updateAddress(user, fieldsToUpdate['address']);
                        break;
                    default:
                        console.log("Other features are under development ...");
                        reject("Other features are under development ...");
                }
            });
        }
        resolve(user);
    })
}