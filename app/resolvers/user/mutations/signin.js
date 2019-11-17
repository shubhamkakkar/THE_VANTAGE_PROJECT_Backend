import UserSchema from "../../../models/User";
import {jwtToken} from "../helperUserFunctions/jwt";
import {GraphQLError} from "graphql";
import loginHandler, {hashedPassword} from "./loginHandler";

export default function signinMutation({email, password}) {
    return UserSchema.findOne({email})
        .then(async (res) => {
            if (res === null) {
                const encryptedPassword = hashedPassword(password)
                const user = new UserSchema({
                    email,
                    password: encryptedPassword,
                });

                return user.save()
                    .then(res => {
                        // @ts-ignore
                        const {password, ...restUserInformation} = res._doc;
                        return {
                            token: jwtToken({email}),
                            ...restUserInformation
                        }
                    })
                    .catch(res => res)
            } else {
                const {password: encryptedPassword, ...restUserInformation} = res._doc;
                return loginHandler({
                    email,
                    encryptedPassword,
                    enteredPassword: password,
                    restUserInformation,
                    errorMessage: "User already exists in the database, the entered password didnot match"
                })

            }
        })
        .catch(er => new GraphQLError("signin failed", er))
}
