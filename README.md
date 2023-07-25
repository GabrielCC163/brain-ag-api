# Brain Ag API

### Requirements:
* Docker
* Docker Compose
* Node (v16.14.0)
* NPM (v8.3.1)

<hr>

### Start the API
```
cd brain-ag-api

docker-compose up
```

### API Documentation
* Access: http://localhost:3000/docs

<hr>

### Tests
Make sure that the Postgres database is up, then:
```
cd brain-ag-api

npm run test
```

<hr>

### ***Postgres Database***
* Start: 
    ```
    docker-compose up db
    ```

<hr>

### Technologies
* NestJS
    * Framework for building efficient, scalable Node.js server-side applications.
    * Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.
    * Along with NestJS, this project used the **TypeScript** programming language.

* PostgreSQL
    * One of the most used and highly stable relational databases nowadays.

* TypeORM
    * One of the best ORMs for NestJS that makes easy to link TypeScript application up to a relational database. 
    * TypeORM uses TypeScript decorators extremely effectively, resulting in entity classes that are expressive and very easy to read.
