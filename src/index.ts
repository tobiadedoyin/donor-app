import express, {
  Request,
  Response,
  NextFunction,
} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import CustomError from './Utils/CustomError';
import errorHandler from './errors/error';
import { handleResponse } from './Utils/responseHandler';
import { apiStatusCode } from './Utils/apiCodes';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('logger middleware');
  next();
});

app.get('/', (req: Request, res: Response) => {
  handleResponse(res, apiStatusCode.success, 'welcome', {});
});

app.all(
  '*',
  (req: Request, res: Response, next: NextFunction) => {
    const error = new CustomError(
      `can't find ${req.originalUrl}`,
      apiStatusCode.notFound
    );
    next(error);
  }
);

app.use(errorHandler);
// console.log(process.env);
// console.log(app.get('env'), 'second answer');

app.listen(3040, () => {
  console.log('server running on port 3040');
});
