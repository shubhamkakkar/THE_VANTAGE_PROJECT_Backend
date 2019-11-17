import UserSchema from "../../../models/User";
import {jwtToken} from "../helperUserFunctions/jwt";

export default function usersQuery() {
    return UserSchema.find().then(allUsers => {
        if (allUsers.length) {
            let returnObj = [];
            //@ts-ignore
            allUsers.forEach(({email, _id, publicKey, privateKey}) => returnObj = [...returnObj, {
                email,
                _id,
                token: jwtToken({email})
            }]);
            return returnObj;
        }
        return []
    }).catch(er => er);
}
