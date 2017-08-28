# Webpack ES2015 and Sass Boilerplate

A barebones webpack config to compile Sass via node-sass and ES2015 JavaScript via Babel. Provides webpack-dev-server and webpack-dashboard.

![screenshot of browser and webpack-dashboard](http://images.jakebot.com/oXnW0SE6.png)

## Install Dependencies

First, install global dependencies:

```
npm install webpack-dashboard webpack-dev-server -g
```

Then install local dependencies:

```
npm install
```

## Developing Locally
1. Run
```
npm run dev
```

This starts webpack dev server on [localhost:8080](http://localhost:8080) and webpack will watch for changes and automatically reload the browser.

## Simulate production
1. Run
```
  npm run production
```

This is the same as running dev, but will minify JS and CSS.

