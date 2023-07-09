# Kudos Application

"Kudos" is a dummy application designed to practice new skills and explore the rich feature set of Prisma ORM. 
Users on Kudos can create an account, log in, and give kudos to other users.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies Used

The following tools were used to build this application:

- **Database**: MongoDB
- **Object Document Mapper (ODM)**: Prisma
- **React Framework**: Next.js
- **Styling**: TailwindCSS
- **Image Storage**: AWS S3
- **Deployment**: Vercel

## Features

During the development of this application, the following features were implemented:

- **Database Configuration**: Connect to MongoDB and set up the necessary configurations.
- **Data Modeling**: Define the structure of the application's data using Prisma's data modeling capabilities.
- **Authentication with Session-based Auth**: Implement user authentication using sessions for secure access.
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on data with Prisma.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.