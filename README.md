# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# JSON SERVER

https://www.npmjs.com/package/json-server

To use json-server to test it in this app, simply use "npx json-server --watch {your .json or .js file} --port {the port you want}"

To install and use json-server on your application, do the following steps:

1. Install json-server, globally or in your application:
   - Globally: npm i -g json-server
   - Locally: npm i json-server --save

2. Create a .json or .js file with the format you'll use for your application, there are examples in db.json (only structure)
   and in db.js (example of programmatically creating user data, as specified in the docs)

3. Start the json-server service:
   - Globally: json-server --watch {your .json or .js file} --port  {the port you want}
   - Locally: npx json-server --watch {your .json or .js file} --port  {the port you want}