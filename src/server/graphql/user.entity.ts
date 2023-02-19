import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User {

    @Field()
    name!: string;

    @Field()
    email!: string;
}
