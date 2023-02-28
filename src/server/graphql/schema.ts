import "reflect-metadata";
import { buildSchema,} from "type-graphql";
import { UserResolver } from "./user/user.resolver";

export const schema = await buildSchema({
    resolvers: [UserResolver],
});
