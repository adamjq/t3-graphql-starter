import "reflect-metadata";
import { Resolver, Query } from "type-graphql";
import  { User } from "./user.entity";
import { getUsers } from "../../service/user.service";

@Resolver()
export class UserResolver {

    @Query(() => [User])
    async users(): Promise<User[]> {
        return getUsers() as Promise<User[]>;
    }
}
