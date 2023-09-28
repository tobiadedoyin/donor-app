import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'hello world!',
  });
});

app.listen(3040, () => {
  console.log('server running on port 3040');
});
