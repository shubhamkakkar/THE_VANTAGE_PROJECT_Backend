import rankPredictor from "./mutation/randkPredictor";

export default {
    Mutation: {
        rankPrediction: (parent, args) => ({
            rank: rankPredictor(args).then(res => res).catch(er => er)
        })
    }
}
