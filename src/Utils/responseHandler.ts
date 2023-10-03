import { Response } from 'express';

export const handleResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T
) => {
  res.status(statusCode).json({
    statusCode,
    message,
    data,
  });
};
