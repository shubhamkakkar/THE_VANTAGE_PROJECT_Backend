import evaluateQAQuery from "./query/evaluateQA"
import allQA from "./query/allQA";
import addQAMutation from "./mutation/addQA";

export default {
    Mutation: {
        addQA: (parent, args) => addQAMutation(args)
    },
    Query: {
        QA: (parent, args) => allQA(args),
        evaluateQA: (parent, args) => evaluateQAQuery(args)
    }
}
