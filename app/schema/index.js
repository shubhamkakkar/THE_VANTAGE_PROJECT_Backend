import {gql} from 'apollo-server-express';

import userSchema from './users/user';
import rankSchema from "./rankPrediction/rankPrediction"
import QASchema from "./QA/QA"

const linkSchema = gql`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }
`;

export default [linkSchema, userSchema, rankSchema, QASchema];
