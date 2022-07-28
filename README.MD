# Classify back-end

The objective of this document is to describe _Classify_'s back-end architecture. It will do so by going through the following:

1. Tech Stack

2. Main end-points

3. Database Schemas

4. How to deploy this project on own machine

## Tech Stack

This project makes further use of NodeJS, Express, JWT e Mongoose.

## How to deploy this project on own machine

To deploy this project and test it in your own machine, please do:

1. Make sure you have installed [mongodb](https://www.mongodb.com/try/download/community)

2. Clone this repo: `git glone https://github.com/ElielCalore/CategoryBank-api.git`;

3. Run `npm install` for installing all its dependencies and libraries;

4. Create a _.env_ file and fill in the main environment variables:

3.1. `PORT=`

3.2. `REACT_APP_URL=`

3.3. `MONGODB_URI=`

3.4. `TOKEN_SIGN_SECRET=`

5. Run `npm run dev`

## _Classify_'s Front-end repo

You can find Classify's front-end project [here](https://github.com/ElielCalore/CategoryBank-React).

# Usage

API features.

> _API_URL = [https://classify-api-backend.herokuapp.com/](https://classify-api-backend.herokuapp.com/)_

# Table Crud's

## Table Bank

**Create a New Collection**

    POST /API_URL/bank/custom-bank

**Search All Collection**
GET /API_URL/bank/custom-model

**Search for a Specific Collection**

    GET /API_URL/bank/:id

**Edit and Update a Specific Collection**

    PATCH /API_URL/bank/update-bank/:id

**Delete a Specific Collection**
DELETE /API_URL/bank/delete/:id

## Table Category

**Create a New Collection**

    POST /API_URL/category/new-category

**Search All Collection**
GET /API_URL/category/categories

**Search for a Specific Collection**

    GET /API_URL/category/:id

**Edit and Update a Specific Collection**

    PATCH /API_URL/category/update-b/:id

**Delete a Specific Collection**
DELETE /API_URL/category/delete/:id

## Table Transaction

**Create a New Collection**

    POST /API_URL/transaction/new-transaction

**Search All Collection**
GET /API_URL/transaction/transactions

**Search for a Specific Collection**

    GET /API_URL/transaction/:id

**Edit and Update the Transaction by Entering a Category**

    PATCH /API_URL/transaction/categorize

**Delete a Specific Collection**
DELETE /API_URL/transaction/delete/:id

## Table User

**Create a New Collection**

    POST /API_URL/user/signup

**Search All Collection**
POST/API_URL/user/login

**Connect a Collection**

    GET /API_URL/user/profile

**Edit and Update a Collection**

    PATCH /API_URL/user/update-profile

**Delete a Collection**
DELETE /API_URL/user/disable-profile

## Table Upload

**Create a New Collection**

    POST /API_URL/upload-image
