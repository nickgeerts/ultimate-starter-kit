# The Ultimate Starter Kit

This is the ultimate, quintessential, alpha-omega of React / Node starter kits. Actually no, it's just the starter for my personal Node-based projects. It basically sets up a React app with server-side rendering and code splitting per route.

## Stack

This starter includes:

* React
* Typescript
* Express
* React Router
* Loadable Components (for code splitting)
* Webpack
* Babel
* Prettier (automatic code formatting)

To be added:

* Mongoose (for data persistence)
* Styled Components (for styles)

## Routes

Pages have a client-side route in React Router and a corresponding server-side route with a special data route ending in .json. Client pages are defined in client/pages and data routes are defined in server/data.

## Install

Run:

```
yarn
```

## Run in development

Start Webpack:

```
yarn dev
```

Start Node:

```
yarn start
```
