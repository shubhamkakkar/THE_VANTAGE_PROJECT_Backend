import {jwtToken} from "../helperUserFunctions/jwt";
import {GraphQLError} from "graphql";

const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
export const hashedPassword = (password) => bcrypt.hashSync(password, salt);

export default function loginHandler({encryptedPassword, enteredPassword, email, restUserInformation, errorMessage}) {
    return bcrypt.compare(enteredPassword, encryptedPassword)
        .then((passwordRes) => {
            console.log({passwordRes});
            if (passwordRes) {
                return {
                    token: jwtToken({email}),
                    ...restUserInformation
                }
            } else {
                return new GraphQLError(errorMessage)
            }
        });
}
