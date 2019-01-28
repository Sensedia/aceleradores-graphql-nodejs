#Sensedia - GraphQL Engine

## Get Started
1. **Install [Node](https://nodejs.org)**.
2. **Clone the repository.** - `https://github.com/Sensedia/aceleradores-graphql-nodejs.git`).
3. **Entre no local aonde o repositório foi criado.** - `cd aceleradores-graphql-nodejs`.
4. **Instalar as dependências de pacotes.** - `npm install`.
5. **Criar a variáveis de ambiente.** - `LOG, PORT, MAX_QUERY_LENGTH, TIMEOUT, NODE_ENV, WEATHER_URL, WEATHER_CREDENTIALS, COUNTRY_URL, CURRENCY_URL, CURRENCY_CREDENTIALS`.
6. **Inicie a aplicação.** - `npm start`.
7. **Testando a aplicação.** - `http://localhost:8080/graphql`.

### Dependências de Produção
| **Dependency** | **Use** |
|----------|-------|
|os|The os module provides a number of operating system-related utility methods.|
|cluster|The cluster module allows easy creation of child processes that all share server ports.|
|express|Fast, unopinionated, minimalist web framework for node.|
|body-parser|Parse incoming request bodies in a middleware before your handlers, available under the req.body property.|
|errorhandler|This middleware is only intended to be used in a development environment, as the full error stack traces and internal details of any object passed to this module will be sent back to the client when an error occurs.|
|express-validator|This package offer very simple and easy way to validate any type of json object (request json object) for expressjs.|
|https|HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a separate module.|
|moment|Parse, validate, manipulate, and display dates and times in JavaScript.|
|node-fetch|The node-fetch is minimal code for a window.fetch compatible API on Node.js runtime.|
|express-graphql|Create a GraphQL HTTP server with any HTTP web framework that supports connect styled middleware, including Connect itself, Express and Restify.|
|graphql|The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.|
|graphql-date|GraphQL Date Type.|
|graphql-iso-date|GraphQL ISO Date is a set of RFC 3339 compliant date/time scalar types to be used with graphQL.js.|
|graphql-relay|This is a library to allow the easy creation of Relay-compliant servers using the GraphQL.js reference implementation of a GraphQL server.|
|graphql-server-express|Production-ready Node.js GraphQL server for Express and Connect.|
|graphql-tools|This package provides a few useful ways to create a GraphQL schema.|

### Dependências de Desenvolvimento
| **Dependency** | **Use** |
|----------|-------|
|babel-plugin-module-resolver|A Babel plugin to add a new resolver for your modules when compiling your code using Babel.|
|babel-preset-env|A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.|
|babel-cli|Babel command line.|
|nodemon|Monitor for any changes in your node.js application and automatically restart the server.|
|babel-plugin-inline-import|Babel plugin to add the opportunity to use import with raw/literal content. It is good e.g. for importing *.graphql files into your code.|
|babel-preset-es2015|Babel preset for all es2015 plugins.|
|babel-preset-stage-0|Babel preset for stage 0 plugins.|
|chai|Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.|
|chai-http|HTTP integration testing with Chai assertions.|
|mocha|Simple, flexible, fun JavaScript test framework for Node.js & The Browser.|
|nodemon|nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.|
