

# Install Node & NPM

# Install angular cli
> npm install -g @angular/cli 

# How to start app
* In first terminal/cmd __npm run server__
* In second terminal/cmd __npm run start__


# Create angular project
ng new Angular-Sample-App


# Add app new feature
* Adding Angular HttpClient (add HttpClientModule in app.module.ts)
* Creating UI Components \
  ng g component home \
  ng g component about 
* Adding Routing (app-routing.module.ts)
* Adding Angular Material (ng add @angular/material)
* Mocking a REST API \
  npm install --save json-server \
  create server folder & database.json \
  package.json enty 
  "generate": "node ./server/generate.js > ./server/database.json",
  "server": "json-server --watch ./server/database.json"

* Creating a Service for Consuming the REST API with Angular HttpClient \
  ng g service api \


# or create a new repository on the command line
echo "# angular-example" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/developershyam/angular-example.git
git push -u origin main
# or push an existing repository from the command line
git remote add origin https://github.com/developershyam/angular-example.git
git branch -M main
git push -u origin main


# AngularExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# ESLint
* Admin cmd __ng add @angular-eslint/schematics__

### Ref
* https://www.freecodecamp.org/news/angular-8-tutorial-in-easy-steps/