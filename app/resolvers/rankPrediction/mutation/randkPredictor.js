import User from '../../../models/User'
import {JWTVerify} from "../../user/helperUserFunctions/jwt";
import {GraphQLError} from "graphql";
import rankPredictionDataSet from "./rankPredictionDataSet";

export default function rankPredictor({token, marks}) {
    const {email} = JWTVerify(token);
    return User.findOne({email})
        .then(user => {
            if (user) {
                const {isUserNew, ...rest} = user._doc;
                User.findOneAndUpdate({email}, {isUserNew: false, ...rest}, {new: true});
                return rankPredictionDataSet({marks})
            } else {
                return new GraphQLError("User not found")
            }
        })
        .catch(er => new GraphQLError("Unable to predict rank, try again"));
}
