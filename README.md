# Testra

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/testra-tech/testra-api/graphs/commit-activity)
[![Build Status](https://travis-ci.org/testra-tech/testra.svg?branch=master)](https://travis-ci.org/testra-tech/testra)
[![Greenkeeper badge](https://badges.greenkeeper.io/testra-tech/testra.svg)](https://greenkeeper.io/)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

# Getting started

1. Go to project folder and install dependencies:
 ```sh
 yarn install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 yarn start
 ```

# Project structure

```
dist/                        web app production build
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
`yarn start`                     | Run development server on `http://localhost:4200/`
`yarn run build [-- --env=prod]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
`yarn test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`yarn run test:ci`               | Lint code and run unit tests once for continuous integration
`yarn run e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
`yarn run lint`                  | Lint code
`yarn run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`yarn run docs`                  | Display project documentation

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).
