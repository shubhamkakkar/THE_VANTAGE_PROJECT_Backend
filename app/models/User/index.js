import {Schema, model} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isUserNew: {
        type: Boolean,
        default: true
    }
}, {collection: "User"});

export default model('User', UserSchema);
