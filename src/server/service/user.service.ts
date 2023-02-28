import { prisma } from '../db';

export const getUsers = async () => {
    return prisma.user.findMany();
}
