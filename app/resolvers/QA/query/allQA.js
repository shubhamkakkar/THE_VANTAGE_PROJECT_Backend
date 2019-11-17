import QASchema from "../../../models/QA"
import {JWTVerify} from "../../user/helperUserFunctions/jwt";
import UserSchema from "../../../models/User";
import {GraphQLError} from "graphql";

export default function allQAQuery({token}) {
    const {email} = JWTVerify(token);
    return UserSchema.findOne({email})
        .then(user => {
            if (user) {
                const {isUserNew} = user._doc;
                let qaSize = 24;
                if (isUserNew) {
                    qaSize = 36;
                }
                return QASchema.find()
                    .then(qa => {
                        let randomSet = [];
                        while (randomSet.length < qaSize) {
                            const randomData = qa[Math.floor(Math.random() * qa.length)];
                            randomSet.push(randomData)
                        }
                        return randomSet
                    })
                    .catch(er => er)


            }
        })
        .catch(er => new GraphQLError("User detection failed"))

}
