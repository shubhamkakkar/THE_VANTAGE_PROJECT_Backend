import {gql} from 'apollo-server-express';

export default gql`
    extend  type Mutation {
        addQA( input: addQAInput! ): ReturnQA!
    }

    extend type Query {
        QA( token: String! ): [ReturnQA!]!
        evaluateQA( _id: ID!, statedAnswerIndex: Int! ): ReturnEvalutaion
    }

    type ReturnQA {
        _id: ID!
        question: String!,
        options: [String!]!
    }

    type ReturnEvalutaion{
        recommendation : String
        score: Int!
    }

    type OptionReturn {
        value: String!
    }

    input addQAInput {
        question: String!,
        options: [String!],
        answerIndex: Int!
    }
    input Option {
        value: String!
    }

`;

