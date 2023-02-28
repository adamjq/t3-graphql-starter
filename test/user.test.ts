import { prisma } from '../src/server/db';
import { getUsers } from '../src/server/service/user.service';

describe('User (e2e)', () => {

    /**
     * Delete all data after each test
     */
    afterEach(async () => {
        await prisma.user.deleteMany()
    })

    afterAll(async () => {
        await prisma.$disconnect()
    })

    it('should find users', async () => {
        const users = await getUsers();
        expect(users).toHaveLength(0);
    })
})
