# Webpack ES2015 and Sass Boilerplate

A barebones webpack config to compile Sass via node-sass and ES2015 JavaScript via Babel. Provides webpack-dev-server and webpack-dashboard.

![screenshot of browser and webpack-dashboard](http://images.jakebot.com/oXnW0SE6.png)

## Install Dependencies
```
npm install
```

## Developing Locally
1. Run
```
npm run dev
```

This starts webpack dev server on [localhost:8080](http://localhost:8080) and webpack will watch for changes. There is no hot reloading, so you'll still need to reload the browser manually.

## Simulate production
1. Run
```
  npm run production
```

This is the same as running dev, but will minify JS and CSS.

