import signinMutation from "./mutations/signin";
import loginMutation from "./mutations/login";

export default {
    Mutation: {
        signin: (parent, args) => signinMutation(args),
        login: (parent, args) => loginMutation(args)
    },
};
