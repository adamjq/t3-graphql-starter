import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@gmail.io' },
    update: {},
    create: {
      email: 'alice@gmail.io',
      name: 'Alice'
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@gmail.io' },
    update: {},
    create: {
      email: 'bob@gmail.io',
      name: 'Bob'
    },
  })
  const sam = await prisma.user.upsert({
    where: { email: 'sam@gmail.io' },
    update: {},
    create: {
      email: 'sam@gmail.io',
      name: 'sam'
    },
  })
  console.log({ alice, bob, sam });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
