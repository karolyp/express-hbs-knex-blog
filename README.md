# Express - Handlebars - Knex skeleton project
This project is pre-configured with:
  - KnexJs with MySQL driver
  - a basic migration and seed file
  - built-in sample routes
  - Handlebars templating engine with some sample views
  - .env.template file to hold environment variables that will be injected
  - Nodemon for live reload
  - request logging

# Setup
## Dependencies
This project requires a running MySQL instance. If you don't have one set up locally, you can start always start a Docker container by the following command:

`docker run --name mysql-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<root user's password> -d mysql`

## Database
You have to create a database to serve your application:

`docker exec -it mysql-db mysql -p -e "CREATE DATABASE <database name>"`

## Configuration
You can find a .env template file that you have to fill out to fit your needs.
After you're done, **rename** it to **.env**

# Start application
`npm start`

Open http://localhost:3000
