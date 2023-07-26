# Brain Ag API

### Requirements:
* Docker
* Docker Compose
* Node (v16.14.0)
* NPM (v8.3.1)

<hr>

### Start the API
The command below will start all services and run the migrations and seeds:
```
cd brain-ag-api

docker-compose up
```

<hr>

### API Documentation
* Access: http://localhost:3000/docs


<hr>

### Run requests in Insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=brain-ag-api&uri=https%3A%2F%2Fgist.githubusercontent.com%2FGabrielCC163%2Ff11e9889b409b0bd2fb80da64e2a13a6%2Fraw%2F4585346aa7c63c9faefd587a81574fec102bab73%2Fgistfile1.txt)

<hr>

### Tests
Make sure you have run the "docker-compose up" command before, then:
```
cd brain-ag-api

npm run test-docker
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
