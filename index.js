import express from 'express';
import mongoose from "mongoose"
import cors from 'cors';
import {config} from "dotenv"
import {resolve} from "path"

import {ApolloServer} from 'apollo-server-express';
import schema from './src/schema';
import resolvers from './src/resolvers'

config({path: resolve(__dirname, "./.env")});
const MONGO_URI_DEV = process.env.MONGO_URI_DEV;

mongoose.connect(MONGO_URI_DEV, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(_ => {
        const server = new ApolloServer({
            typeDefs: schema,
            resolvers
        });
        const app = express();
        app.use(cors());
        server.applyMiddleware({app});
        const port = process.env.PORT || 4000;
        app.listen({port}, () =>
            console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath} ${port}`)
        );
    })
    .catch((er) => console.log("failed to connect to mongoose", er));

