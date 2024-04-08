import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import authenticateJWT from './middleware/authenticateJWT';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';
import indexRouter from'./routes/index';
import usersRouter from'./routes/users';
import kanbanRouter from'./routes/kanban';
import connectDatabase from "./databases/mongodb/connector";


const app = express();
connectDatabase();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api/users', usersRouter);
app.use('/api/kanban', authenticateJWT, kanbanRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
