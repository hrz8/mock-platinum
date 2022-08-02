# Mock Platinum Service

## DB Schema
Below is the database schema of this service:

![](./dbschema.png)

## Setup
Set up your `.env` file align with `.env.sample` given

```.env
NODE_ENV=development
APP_PORT=3010
DB_CONNECTION_STRING=mysql://user:password@localhost:3306/db_name
INITIAL_ADMIN_PASSWORD=admin123
BCRYPT_SALT=8
```

## Install
```sh
$ yarn 
# or
$ npm install
```

## Run

```sh
$ yarn db:create
$ yarn db:migrate
$ yarn db:seed:exec
```

## Info

NodeJS: v16.13.1

## Author

- Member 1
- Member 2
- Member 3
