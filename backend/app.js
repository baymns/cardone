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
import evacuatorOrder from './routes/evacuatorOrder.js';

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

app.use((req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
});

app.use('/api/logout', logoutRouter);
app.use('/api/requests', evacuatorOrder);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => console.log('Server is running'));
