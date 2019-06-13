# Treemap

Purpose is to convert a simple, parent-child data entries (with title, description, color) into a collapsible tree structure on front-end.

Capability of editing data should be added in later stages.

Data is stored in local MySQL. Node.js backend provides TypeORM + GraphQL server. And from it, Apollo-based client will read and render the data.

## Tutorials I used

- This is the guide I used for backend: https://www.youtube.com/watch?v=LAzwTlj83EI&list=PLN3n1USn4xlltIGRInnlHtsOdvHIUQFHL&index=3

## Install notes

1. Create a `ormconfig.json` file in `Server/` folder. 

File contents are as below - replace indicated entries with your db access data.

```
{
   "type": "mysql",
   "host": "**fill in your db hostname**",
   "port": 3306,
   "username": "**fill in your db username**",
   "password": "**fill in your db password**",
   "database": "**fill in your database name**",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```

2. Launch server as you would expect - in the `Server/` folder, do `npm install` and `npm start`