import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import AppError from '@shared/errors/AppError';
import Routes from './routes';

import '../typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(Routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.code).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('🚀 Server started on port 3333!'));
