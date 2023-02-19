import "reflect-metadata";
import { Resolver, Query } from "type-graphql";
import  { User } from "./user.entity";
import { prisma } from '../db'

@Resolver()
export class UserResolver {

    @Query(() => [User])
    async users(): Promise<User[]> {
        return await prisma.user.findMany() as User[];
    }
}
