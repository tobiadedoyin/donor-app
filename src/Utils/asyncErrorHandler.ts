import { Request, Response, NextFunction } from 'express';

export const asyncErrorHandler = (
  func: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>
) => {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    func(req, res, next).catch((err) => next(err));
  };
};
