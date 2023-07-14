import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import path from "path";
const __dirname = path.resolve()

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import booksRouter from './routes/books.js';

var app = express();

// view engine setup
mongoose.connect('mongodb://127.0.0.1:27017/bookManager')
  .then(() => console.log('Connected!'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use((req, res, next) => {
//   const originalJson = res.json;
//   res.json = (data) => {
//     if (!data.error) {
//       const formattedResponse = {
//         status: status(res.statusCode),
//         data: _.isArray(data) ? [...data] : _.isObject(data) ? [data] : [],
//         error: null,
//       };
//       return originalJson.call(res, formattedResponse);
//     }
//     return originalJson.call(res, data);
//   };
//   next();
// });

app.use(function(err, req, res, next) {

  // res.status(err.status).json({
  //   status: status(res.statusCode),
  //   data: [],
  //   error: err.message
  // })

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
