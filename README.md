# Real Trends Challenge

# Steps
-   Install nextjs
-   create tsconfig to enable typescript
-   instal ' npm install --save-dev typescript @types/react @types/node'
-   npm run dev to autocreate the tsconfig
-   install linter of the projects
-   instal firebase
-   create the project in firebase and import the config in a .env file
-   create the firebaseConfig
-   Select the login option in react-firebaseui (Google and Github seen good idea)
-   create firebaseAuth
-   Styles? in sass?
-   Create authProvider, maybe a product Provider?
-   Why not working? because you always forget use the provider in _app.tsx 😆
-   Why not working yet? because you have to restart when changes the _app.tsx
-   Create a folder component
-   Should i create a config folder? maybe
-   Create a basic layout and use it in the _app.tsx
-   Styles?, bring the big gun. Style Components. 'npm i styled-components ' 'npm i --save-dev @types/styled-components'
-   Is neccesary install  "babel-plugin-styled-components" as -D?
-   Create the GlobalStyle and use it in the _app.tsx
-   GlobalStyle use types?.
-   **Turn off the strict mode of typescript for a while.**
-   boilerplate ready.

## Brainstorm
-   We need a page for the poll, and maybe other page for select product from Meli.
-   The select page should be access only by admin to avoid multiples users creating a poll.
-   Make the poll page like a Battle (mortal kombat), we need two products, a life score, a timer, input for the review, select and option, the results above. We need the name of the voter. THE USER NEED TO BE LOGIN TO VOTE.
-  From the user Login we can use the name, and the profilePic?
-   For the selecting page, we can search a keywords and select two products for the poll. Name, picture, permalink? price? ID 
- Store the products in firestore
- Bring data from firestore in the versus poll. Vote.
- Button to reset?
- The vote page should be private? or only the vote.

# Steps2
-  Layout > Create the header with logo and login button, profile pic if is login.
-  Layout > create a footer
-  create the poll board in the index
-  PROBLEMS TO IMPORT SVG FILES. fix later
-  problems with styled components, have to create .babelrc, and _document.tsx
-  create the components for the navbar login, logout button.
-

- create UI for select products
- search bar? modal?
-  install axios
- connect to the MELI's API
- display grid






    This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
