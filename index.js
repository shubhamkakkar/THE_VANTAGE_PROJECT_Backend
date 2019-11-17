import express from 'express';
import mongoose from "mongoose"
import cors from 'cors';
import {config} from "dotenv"
import {resolve} from "path"
import {ApolloServer} from 'apollo-server';
import typeDefs from './app/schema';
import resolvers from './app/resolvers'

config({path: resolve(__dirname, "./.env")});
const MONGO_URI_DEV = process.env.MONGO_URI_DEV;

mongoose.connect(MONGO_URI_DEV, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(_ => {
        const server = new ApolloServer({typeDefs, resolvers});
        server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });


    })
    .catch((er) => console.log("failed to connect to mongoose", er));

