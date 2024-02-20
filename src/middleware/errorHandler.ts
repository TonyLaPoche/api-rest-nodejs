import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  if (err instanceof ZodError) {
    res.status(400).json({ error: err.flatten() });
    return;
  }
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ name: err.name, err: err.message });
    return;
  }

  res.status(500).json({ error: "Internal Server Error" });
};
