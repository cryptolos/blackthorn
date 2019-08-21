# Blackthorn API


## Requirements

In order to run the API you need to configure a mysql DB, the current repository is using the heroku DB
in case you don't have access to a different MySQL server.

First you need to install node dependencies and run the DB migration in order to create the DB. 
If the DB tables already exist the migration will not do anything. 
Once the DB is ready you need to generate an API key.
```
# Install dependencies
$ npm install

# Execute database migration to create tables
$ npm run migrate

# Create apikey before using api
$ npm run apikey
```

The last command should generate the following output with your api key:

```
$ npm run apikey

> backend@1.0.0 apikey /PATH-TO-YOUR-API-DIRECTORY
> ts-node src/utils/tokenGenerator.ts

Api key created
API-KEY-GENERATED-STRING
```

The api can be built and executed with the following command
```
# Execute api scripts
npm run prod
```

The API url in heroku is the following:

https://blackthorn-42084.herokuapp.com/

You can test the API with this api key

```
ano5aGg4eGdpNWZyVHd9YlZzM0BbVFhTWE1U
```

The benchmarking test can be executed with the following command:


```
$ npm run benchmark
```

The Heroku free MySQL services are limited (JawsDB and ClearDB), therefore the tests were not as desired. 
The local environment showed a much better performance.