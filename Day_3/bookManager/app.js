import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {connectToMongo} from './src/shared/database/connections/MongoDBDatabase.js'
import 'dotenv/config.js';

import path from "path";
const __dirname = path.resolve()

import indexRouter from './src/routes/index.js';
import usersRouter from './src/routes/users.js';
import booksRouter from './src/routes/books.js';
import employeesRouter from './src/routes/employees.js'
import { connectionTest } from './src/shared/database/connections/mySQLDatabase.js';

var app = express();

// view engine setup
connectToMongo();
console.log(connectionTest);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/employees', employeesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


app.use(function(err, req, res, next) {



  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;