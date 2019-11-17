import QASchema from "../../../models/QA"
import {GraphQLError} from "graphql";

export default function evaluateQAQuery({_id, statedAnswerIndex}) {
    return QASchema.findById(_id)
        .then(({answerIndex, recommendation}) => {
            let returnObj = {
                score: 0,
                recommendation
            };
            if (answerIndex === statedAnswerIndex) {
                returnObj = {
                    ...returnObj,
                    score: 4
                }
            } else {
                returnObj = {
                    ...returnObj,
                    score: -1
                }
            }
            return returnObj
        }).catch(er => new GraphQLError("Error evaluating, try again"))
}
