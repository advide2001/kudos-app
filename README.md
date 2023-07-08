# Kudos Application

This series aims to take an in-depth look at how to start, develop, and deploy an application using the technologies mentioned below and hopefully highlight just how easy it is to do so with the rich feature sets these tools provide!

By the end of this series, you will have built and deployed an application called "Kudos", a site where users can create an account, log in, and give kudos to other site users.

## Tech Stack

The following tools were used to build this application:

- **Database**: MongoDB as the database
- **Object Document Mapper (ODM)**: Prisma as your Object Document Mapper (ODM)
- **React Framework**: Remix as the React framework
- **Styling**: TailwindCSS for styling the application
- **Image Storage**: AWS S3 for storing user-uploaded images
- **Deployment**: Vercel for deploying the application

During the development of this application, I learned the following:

- Database configuration
- Data modeling
- Authentication with session-based auth
- Create, Read, Update, and Delete (CRUD) operations, along with the filtering and sorting of data using Prisma
- Image uploads using AWS S3
- Deploying to Vercel

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!