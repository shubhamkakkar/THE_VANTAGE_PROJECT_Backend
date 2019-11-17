import UserSchema from "../../../models/User";
import {GraphQLError} from "graphql";
import loginHandler from "./loginHandler";

export default function loginMutation({email, password}) {
    return UserSchema.findOne({email})
        .then((user) => {
            if (user !== null) {
                const {password: encryptedPassword, ...restUserInformation} = user._doc;
                console.log({restUserInformation})
                return loginHandler({
                    email,
                    encryptedPassword,
                    enteredPassword: password,
                    restUserInformation,
                    errorMessage: "Password didnot match"
                })
            } else {
                return new GraphQLError("User not found")
            }
        })
        .catch(er => {
            return new GraphQLError("login failed", er)
        })
}
