A minimal template for a full-stack application
Database uses a mongodb cluster

Use `npm install` to install needed deps.
**NOTE: Nodemon needs to be installed globally `npm -g install nodemon` **

set **DB_URI**, **DB_NAME** and **DB_COLLECTION** in .env
(db_uri is the mongodb collection url)

### "Frontend"

Can be run with `node main.js`

1. Fetches the current data in the database
2. Posts a random number to database

### Backend

Run with `nodemon server.js`, has "/api/get" and "api/post" endpoints for testing.
