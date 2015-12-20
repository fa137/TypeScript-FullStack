# TypeScript Full-stack

This is a skeleton app that will generate very basic files to spin up a small project with TypeScript. 
I use this for almost all of my projects so I decided to make it open source. 


##AngularJS, ExpressJS, TypeScript

Also included: Gulp, Webpack, E2E+Unit Testing, Browser-Sync, Angular UI-Router, Bower Auto-Inject, Proxy Backend Server (API)


### Installation:

```
git clone https://github.com/fa137/TypeScript-FullStack.git
cd TypeScript-FullStack\
npm install && bower install && tsd install
npm start
```

### Basics:

`gulp` - cleans, build files, runs back-end server and serve data from temporary folder (dev)

`gulp backend` - only runs and watches the activies in the backend server

`gulp clean` - cleans up temporary directory

`gulp build` - generates front-end distribution folder

`gulp serve` - spins up browser-sync server for live code editing

`gulp protratactor` - runs protractor tests

`gulp test:auto` - runs tests and watches for changes


There are many others you can figure out by going through `/gulp` files. 