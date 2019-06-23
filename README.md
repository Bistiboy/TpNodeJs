# TPs NODE JS

## Prerequisites
- [Node][1] 10
- [NPM][2] 6

## Installation

```
npm install
```

## Usage

### Run
```
npm run start
```

### Debug
```
npm run start:debug
```

### Run dist
```
npm run start:dist
```

### Lint
```
npm run lint
```

### Build
```
npm run build
```

### Test
```
npm run test
```

## Endpoints

### Libraries

#### Find all
```
curl -X GET http://localhost:3000/libraries
```


```
curl -X GET http://localhost:3000/libraries?location=43.6,1.4
```

#### Find
```
curl -X GET http://localhost:3000/libraries/id1
```

#### Create
```
curl -X POST http://localhost:3000/libraries \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Ombre blanche Toulouse",
    "location": [43.60539, 1.44862]
}'
```

#### Update
```
curl -X PUT http://localhost:3000/libraries/id1 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Express Ramonville",
    "location": [43.60539, 1.44862]
}'
```

#### Delete
```
curl -X DELETE http://localhost:3000/libraries/id1
```

### Authors

#### Find all
```
curl -X GET http://localhost:3000/authors
```

#### Find
```
curl -X GET http://localhost:3000/authors/id1
```

#### Create
```
curl -X POST http://localhost:3000/authors \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Maxime Chattam"
}'
```

#### Update
```
curl -X PUT http://localhost:3000/authors/id1 \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Maxime Chattam"
}'
```

#### Delete
```
curl -X DELETE http://localhost:3000/authors/id1
```

### Books

#### Find all
```
curl -X GET http://localhost:3000/books
```

```
curl -X GET http://localhost:3000/books?title=Autre%20Monde
```

```
curl -X GET http://localhost:3000/books?authors=id1&authors=id2
```

#### Find
```
curl -X GET http://localhost:3000/books/id1
```

#### Create
```
curl -X POST http://localhost:3000/books \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 3,
            "title": "Autre Monde - Le coeur de la Terre",
            "description": "Tome 3",
            "publicationDate": 915148800000,
            "authors": [
              "5cbe1859f8c97c39d4d0c2d9"
        ]
}'
```

#### Update
```
curl -X PUT http://localhost:3000/books/id1 \
  -H 'Content-Type: application/json' \
  -d '{
	"id": 3,
        "title": "Autre Monde - Le coeur de la Terre",
        "description": "Tome 3",
        "publicationDate": 915148800000,
        "authors": [
          "5cbe1859f8c97c39d4d0c2d9"
    ]
}'
```

#### Delete
```
curl -X DELETE http://localhost:3000/books/id1
```

## Major dependencies
- [Express][3]
- [Nodemon][4]
- [ESLint][5]
- [Webpack][6]
- [Moment][7]
- [Chai][8]
- [Mocha][9]
- [Mock require][10]
- [Chai spies][11]


[1]: https://nodejs.org/en/download/
[2]: https://www.npmjs.com/get-npm
[3]: http://expressjs.com/en/guide/routing.html
[4]: https://github.com/remy/nodemon
[5]: https://eslint.org/docs/user-guide/command-line-interface
[6]: https://webpack.js.org/concepts
[7]: http://momentjs.com
[8]: https://www.chaijs.com/
[9]: https://mochajs.org/
[10]: https://www.npmjs.com/package/mock-require
[11]: https://www.chaijs.com/plugins/chai-spies/
