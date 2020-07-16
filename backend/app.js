import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';
import sessionStorage from 'session-file-store';

import signinRouter from './routes/signin.js';
import signupRouter from './routes/signup.js';
import logoutRouter from './routes/logout.js';

const FileStore = sessionStorage(session);
const app = express();
mongoose.connect('mongodb://localhost:27017/cardone', {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// view engine setup
app.set('views', path.resolve('views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('public')));
app.use(cookieParser());
app.use(
  session({
    store: new FileStore(),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 6000000,
    },
  }),
);

app.use('/api/signin', signinRouter);
app.use('/api/signup', signupRouter);
app.use('/api/logout', logoutRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT);
