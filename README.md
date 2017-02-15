# migration-demo
ng1 -> vue demo

## Setup and working

### For commons

```bash
## setting up commons 
cd commons && npm install

## dev server
npm run dev

## temporary build for library
npm run build:temp
```
### for consumer app

```bash
## install
cd consumer && npm install

## link the commons dev work
npm link ../commons

## run dev server
npm run dev
```

### for angular demo

```bash
## installation
cd angular && npm install

## link the commons dev work
npm link ../commons

## run it
npm start
```




### stuff to read

https://github.com/ngVue/ngVue

https://cushionapp.com/journal/vuejs-inside-angularjs

https://medium.com/@graphicbeacon/how-to-use-vue-2-0-components-in-an-angular-application-4d85bacc42dc#.2j68binkl
