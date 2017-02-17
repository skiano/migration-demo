# migration-demo
ng1 -> vue demo

## Setup

You need the vue-cli installed

```bash
## install the cli
npm install vue-cli -g
```

### For commons

```bash

## Install
cd commons/
npm install

## build for other vue apps
npm run build:plugin

## build for custom elements
npm run build:elements

## dev server
npm run dev
```

### for consumer app

```bash
## install
cd consumer/
npm install

## run a dev server
npm run dev
```

### for angular demo

```bash
## installation
cd angular/
npm install

## run lite server
npm start
```
### running protractor tests

```bash
cd angular/

## start lite server
npm start

## in another terminal start test server
webdriver-manager start

## in another terminal
npm test

```

