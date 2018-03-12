const express = require('express');
const colors = require('colors');
const path = require('path');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const postController = require('./database/post-controller.js');
const configAuth = require('../config/auth.js');
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const env = process.env.NODE_ENV || 'development';

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  postController.getUser(id, user => {
    console.log('id: ', id);
    console.log('user: ', user);
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: configAuth.googleAuth.clientID,
  clientSecret: configAuth.googleAuth.clientSecret,
  callbackURL: configAuth.googleAuth.callbackURL
  },
  function (accessToken, refreshToken, profile, cb) {
    postController.getUser(profile.id, user => {
      if (user) {
        console.log('post:', user);
        cb(null, user);
      } else {
        console.log('found: ', profile);
        postController.postUser(profile.id, profile.displayName, profile._json.image.url, user => {
          cb(null, user);
        });
      }
    });
  }
));

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: configAuth.cookieKey,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/comments/:videoId', postController.getComments, (req, res) => {
  res.send(res.locals.comments);
});

app.post('/comments', postController.postComment, (req, res) => {
  res.send('Post successful');
});

app.get('/auth', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({});
  }
});

app.get('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.redirect('/');
  } else {
    res.send('No logged in user');
    res.redirect('/');
  }
});

if (env === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config');
  const config = Object.create(webpackConfig);

  config.devtool = 'eval-source-map';
  config.entry = [
    `webpack-hot-middleware/client?path=http://localhost:${SERVER_PORT}/__webpack_hmr`,
    './client/index.js'
  ];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: '/',
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }));
} else {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(SERVER_PORT, () => console.log(`App listening on port ${SERVER_PORT}...`.green));