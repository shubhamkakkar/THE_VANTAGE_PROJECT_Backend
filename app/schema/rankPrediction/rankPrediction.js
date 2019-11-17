import {gql} from 'apollo-server-express';

export default gql`
    extend type Mutation {
        rankPrediction(token: String!, marks : Int!): Rank!
    }

    type Rank {
        rank: String!
    }

`;
