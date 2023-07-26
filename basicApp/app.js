import createError from 'http-errors';
import express, { json, urlencoded} from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from "dotenv";
dotenv.config();

import path from "path";
const __dirname = path.resolve()


import indexRouter from './src/routes/index.js';
import usersRouter from './src/routes/users.js';
import { connectToMongoDB } from './src/shared/database/connections/mongoDBDatabse.js';

var app = express();
connectToMongoDB();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


console.log("Server Connected")
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
