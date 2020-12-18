# Phone Catalogue

### Created by Daniel Thompson

## About

This app is hosted entirely on serverless technologies provided by Google. It features a small selection of phones with details that can be viewed upon click. It works on Desktop browsers as well as mobile devices.

## Technologies

### Database

The database is utilising the real-time JSON store database with [Google Firebase](https://firebase.google.com/). It is a very useful database system that I have the most experience with using.

### Hosting

Within Google Firebase, there is the allowance of including free website hosting. That is what the application is running with and serves traffic at a public URL.

### API

The API is running on [Google App Engine](https://cloud.google.com/appengine). I find this a useful tool for running small applications that require a node based design. There was the alternate of keeping this all within Firebase and utilising Cloud Functions but I chose to use App Engine for this task.

### Packages

The packages I have used are found within the package.json files in each respective folder. All used packages have aided to the functionality and development of the application.

## To Run

`npm install` will be required in both the `/api` folder as well as the `/fe` folder. This will install all the relevant modules
A note on versions, as of development I am running NPM version 6.14.8 and Node version 15.4.0.
There are a few commands in each package which will run anything needed.

### /fe

/fe is the frontend portion of this application, here there are a few commands built in with React, but also some I have added.
`npm run build` - This is the standard build command with React, it will bundle up the application and make it ready for use.
`npm run start` - This will start a local version of the application, primarily for development.
`npm run deploy` - This will run a firebase install, note: may require installation of extra modules.

### /api

/api is where the api is built and can run from. It features only two usable commands currently.
`node server.js` - This starts a local server hosting the API, also a needed command for App Engine to run.
`npm run deploy` - This deploys the code to App Engine.

## The API

The API has 4 end points:
`/phones` - A GET request for all phone data
`/deletePhone` - A POST request to delete a specific phone
`/updatePhone` - A POST request to update a specific phone
`/createPhone` - A POST request to create and add a new phone to the database

## URLS

The following URL is available for viewing the application hosted online - https://danthompsonphonecatalog.web.app/
