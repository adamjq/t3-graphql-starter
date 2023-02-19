import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../server/graphql/schema";

const server = new ApolloServer({
    schema,
});

export const config = {
    api: {
        bodyParser: false,
    }
}

const startServer = server.start();

export default async function handler(req: any, res: any) {
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
}
