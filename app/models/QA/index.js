import {Schema, model} from "mongoose";

const QASchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    answerIndex: {
        type: Number,
        required: true
    },
    recommendation: {
        type: String,
        required: true
    }
}, {collection: "QA"});

export default model('QA', QASchema);
