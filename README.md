# One Football - Player Archive

 DEMO :  [https://player-archive.herokuapp.com/](https://player-archive.herokuapp.com/)

## Getting Starter

### Quick Start

1. `npm install`

2. `npm run start:prod`

3. Open a browser and go to [localhost:5000](http://localhost:5000)

OR

### Step by step

1. `npm install` 

2. `npm run install:client`

3. `npm run build:client`

4. `npm run start`

5. Open a browser and go to [localhost:5000](http://localhost:5000)


## Run Tests

1. `npm run test:client`

2. You can see the test coverage in the terminal or you can visit `players-ui/coverage/index.html`.

## Project Architecture

```console
|───docs
|───players-ui
|  |  ├──app
|  |  |──models
|  |  |──utils
|  |  |   └──pipes
|  |  |──@containers
|  |  |   └───search-engine
|  |  └──@components
|  |      |──detail-panel
|  |      |   |──profile
|  |      |   |──summary
|  |      |   └──stats
|  |      |───loader
|  |      └───search-panel
|  |──assets
|  |──environments
|  └──theme
|   ├──variables
|   └──main
|───controllers
|───routes
|───utils
└──index.js
```
## Stack

- Angular 11.
- Nodejs.

## Challenge notes

### UI 

- Framework: Angular 11 (latest version) is used since that's the framework used in oneFootball.

- Styles: The variables has been created by the native css. The project is Sass as preproccesor. The naming convention used in the classes is BEM.

- UX: The stats details has been categorized by PASSING, DEFFENSIVE, OFFENSIVE.

### BE

- For future implementations I would modify the data structure coming from the sandbox given in the challenge to easily adapt the response to the UI. For example, I would refactor the profile/data json to be categorized by `passing`, `deffensive` and `offensive` objects.

## DOCS

- [UI Project Progress](players-ui/docs/progress.md).
- [BE Project Progress](./docs/progress.md).