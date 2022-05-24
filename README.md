# sample-node-app
Sample node js app 
This is just a basic app to test connection with Redis

So it will need you to host a Redis instance somewhere

## Basic dependencies
Make sure you have these installed in your computer for development
1. Node.js (v14 or higher)
2. Yarn package manager

## How to Configure
1. run `yarn install` to install dependencies.
2. copy .env.example to .env and set your environment value there.
3. run `yarn build` to build the application.
4. The application will run in port 80, so make sure no other process is using it.
5. run `yarn start` to run the application.

## Routes
There are 3 routes available
1. GET / , Just a basic default Hello World message.
2. GET /key , This will read a value from Redis, if value is not yet set, it will return null.
3. POST /key , This will set a value to the Redis.

## How to test
1. Send a GET Request to /, for making sure the app is running fine, this doesn't have anything to do with Redis.
2. Send a GET Request to /key, it should return the value as null, if it fails then something is wrong with your Redis configuration.
3. Send a POST Request to /key, it will set a value to the Redis for 60 seconds.
4. Within 60 seconds, send a GET Request to /key, it should return the value as 'abc' instead of null.


