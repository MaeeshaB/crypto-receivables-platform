# Banking Cryptocurrency Receivables Financing Platform
Mock RBC Capital Market's crypto-receivables platform.

## Quick start
### Installation
Install node package manager (npm). Then, in this directory, run:
```
npm install -g @angular/cli
npm i --force
```
If you get an error like "Your cache folder contains root-owned files", you might need to run:
```
sudo chown -R 501:20 "/Users/yourusername/.npm"
npm i --force
```
### Start the UI
```
ng serve
> http://localhost:4200/
```
### Start the Backend
```
npm run db-server
> http://localhost:5000/companies
npm run news-server
> http://localhost:3000/articles
npm run resource-server
> http://localhost:5001/some_resource_folder/...
```
### Generating new components for the UI
```
ng generate service services/…
ng generate component components/…
```
See tutorial at https://www.youtube.com/watch?v=3dHNOWTI7H8&t=5709s

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
