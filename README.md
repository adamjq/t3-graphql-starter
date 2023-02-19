# t3-graphql-starter

This repo contains a modified version of [create-t3-app](https://github.com/t3-oss/create-t3-app) including:
- GraphQL instead of trpc
- Google Auth Provider instead of Discord Auth Provider
- Supabase setup with Prisma

Follow this [YouTube video to configure Supabase](https://www.youtube.com/watch?v=ZWBYu2yFpDs&ab_channel=Doug%27sCodingCorner) with the template.

## Requirements
- Docker
- NVM `brew install nvm`
- Node v18 `nvm install v18`

## Development

```terminal
npm install
npx supabase start
npx prisma migrate dev # or npx prisma db push
npm run dev
```
### API

The GraphQL API uses [type-graphql](https://typegraphql.com/) and runs on the NextJS server on Vercel as a serverless function.

The API is available locally at: http://localhost:3000/api/graphql

New GraphQL types and resolvers should be added in `/src/server/graphql`.

Generate GraphQL typescript types with:
```
npm run generate
```

Navigate to http://localhost:3000/users to see an example response from the GraphQL server.

### Database

The project uses [Supabase](https://supabase.com/) as a hosted Postgres database.

First time login:
```
npx supabase login
```

Make sure Docker is running and start Supabase:
```
npx supabase start
```

And view the local supabase instance at: http://localhost:54323

Shutdown the database:
```
npx supabase stop
```

### Auth Providers

#### Google

A Google OAuth client has been created at https://console.cloud.google.com/apis/credentials with authorized callback URLs:
- `http://localhost:3000/api/auth/callback/google`
- `https://{APP_NAME}.vercel.app/api/auth/callback/google`

## References
- [Modern Full-Stack React/NextJS Setup Guide | 2023 (YouTube)](https://www.youtube.com/watch?v=ZWBYu2yFpDs&ab_channel=Doug%27sCodingCorner)
- [NextJS + GraphQL Blueprint: Professional Grade Setup](https://www.youtube.com/watch?v=XzE-PzALyDc&t=728s&ab_channel=JackHerrington)
