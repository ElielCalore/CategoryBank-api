# Classify back-end

The objective of this document is to describe _Classify_'s back-end architecture. It will do so by going through the following:

1.  Tech Stack
2.  Main end-points
3.  Database Schemas
4.  How to deploy this project on own machine

## Tech Stack

This project makes further use of NodeJS, Express, JWT e Mongoose.

## Main end-points

## Database Schemas

## How to deploy this project on own machine

To deploy this project and test it in your own machine, please do:

1.  Make sure you have installed [mongodb](https://www.mongodb.com/try/download/community)
2.  Clone this repo: `git glone https://github.com/ElielCalore/CategoryBank-api.git`;
3.  Run `npm install` for installing all its dependencies and libraries;
4.  Create a _.env_ file and fill in the main environment variables:
    3.1. `PORT=`
    3.2. `REACT_APP_URL=`
    3.3. `MONGODB_URI=`
    3.4. `TOKEN_SIGN_SECRET=`
5.  Run `npm run dev`

## _Classify_'s Front-end repo

You can find Classify's front-end project [here](https://github.com/ElielCalore/CategoryBank-React).
