## Installation

Asumming you already have brew

Here are the steps in your terminal
```sh
$ brew tap mongodb/brew
```

```sh
$ brew install mongodb-community
```

```sh
$ sudo mkdir -p /System/Volumes/Data/data/db
```

Make a permission to access `System/Volumes/Data/data/db`
```sh
$ sudo chown -R `id -un` /System/Volumes/Data/data/db
```

Run mongoDB (Its pain in the neck to type this, so we made an alias)
```sh
$ sudo mongod --dbpath /System/Volumes/Data/data/db
```

Create an alias to make it east to run
```sh
$ alias mongod='sudo mongod --dbpath /System/Volumes/Data/data/db'
```
EZ!
```sh
$ mongod
```

## Development

You can use insomnia or any API management platform

Before that lets install package and create .env file in our root directory

In this case I use in my .env file
```
DATABASE_URL="mongodb://localhost:27017/employee"
PORT=5000
```

```sh
$ yarn
```

Then

First Step

```sh
$ mongod
```

Second Step:

Run the project
```sh
$ yarn dev
```

Next Step:
Create a Employee
Run POST method using `/api/v1/employees`
```sh
$ curl --request POST \
  --url http://localhost:5000/api/v1/employees \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Name",
	"status": "",
	"time_in": "",
	"time_out": ""
}'
```

### To Run cron job
Make sure you already created a employee

then run
```sh
$ yarn startCronJob
```

This will run every 9AM for time IN and 8PM for time OUT.
If you want to test you can set the scheduler settings

So the combo here is the mongoDB is running and the project is running in order to run the cron job properly

mongoDB
```sh
$ mongod
```
Project
```sh
$ yarn dev
```

cron
```sh
$ yarn startCronJob
```

# Note this project is CRUD so you can play with it.
