import {gql} from 'apollo-server-express';

export default gql`
    extend  type Mutation {
        signin(email:String!, password: String!): ReturnedUser!
        login(email:String!, password: String!): ReturnedUser!
    }
    type ReturnedUser {
        _id: ID!
        email: String!
        token: String!
        isUserNew: Boolean!
    }
`;

