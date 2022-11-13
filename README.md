## Project architecture:
This project, called frontend, is connected to a backend API service that you must also launch locally.

The backend project can be found here: https://github.com/BELAID78/p12_react_sport-see

## Organize your workspace:
For a good organization, you can create a p12_react_sport-see folder in which you will clone the backend project and later, the frontend project:

Clone the backend project into the react_sport-see folder:
```
$ git clone https://github.com/BELAID78/Backend-SportSee-dashboard.git
```

```
react_sport-see/
   - Backend-SportSee-dashboard
```

Clone the frontend project into the react_sport-see folder:
```
$ git clone https://github.com/BELAID78/p12_react_sport-see.git
```

```
react_sport-see/
   - Backend-SportSee-dashboard
   - p12_react_sport-see
```

## How to launch the application locally?

### step 1 - Launch the backend:

Follow the indications in the README of the backend project.

### step 2 - Launch the frontend:

Go to the cloned repo:
```
$ cd p12_react_sport-see
```

Install npm packages (described in `package.json`):
```
$ npm install
```

Install axios packages to fetch data from the backend API:
```
$ npm install axios
```

Install prop type packages for react props runtime type checking:
```
$ npm install prop-types
```
Change the environment configuration in file p12_react_sport-see\src\config\env.js
```
 export const Env = {
    envirement: 'api'
}
```

Launch the app:
```
$ npm start
```

Then go to: `http://127.0.0.1:8000/`