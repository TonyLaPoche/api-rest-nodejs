import { NextFunction, Request, Response } from "express";
import { ExempleService } from "../services/exempleService";
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "../utils/ApiError";
import mongoose from "mongoose";
import {
  ExempleCreationSchema,
  ExempleUpdateSchema,
} from "../DTO/ExempleBodySchema";

export const createExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const resultat = ExempleCreationSchema.parse(req.body);
    const Exemple = await ExempleService.create(resultat);
    res.status(201).json(Exemple);
  } catch (error: unknown) {
    next(error);
  }
};

export const getExemples = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const Exemples = await ExempleService.findAll();
  if (Exemples.length === 0) {
    next(new NotFoundError("No exemple found"));
    return;
  }
  res.json(Exemples);
};

export const getExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      next(new BadRequestError("Invalid format id"));
      return;
    }
    const Exemple = await ExempleService.findById(req.params.id);
    if (!Exemple) {
      next(new NotFoundError("Exemple not found"));
      return;
    }
    res.json(Exemple);
  } catch (error) {
    next(new InternalServerError("Internal Server Error"));
  }
};

export const updateExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      next(new BadRequestError("Invalid format id"));
      return;
    }
    const parsedBody = ExempleUpdateSchema.parse(req.body);
    const updatedExemple = await ExempleService.update(
      req.params.id,
      parsedBody,
    );
    if (!updatedExemple) {
      next(new NotFoundError("Exemple not found"));
      return;
    }
    res.json(updatedExemple);
  } catch (error: unknown) {
    next(error);
  }
};

export const deleteExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      next(new BadRequestError("Invalid format id"));
      return;
    }
    const { deletedCount } = await ExempleService.delete(req.params.id);
    if (deletedCount === 0) {
      next(new NotFoundError("Exemple not found"));
      return;
    }
    res.status(200).send(`Exemple with id ${req.params.id} has been deleted`);
  } catch (error: unknown) {
    next(new InternalServerError("Internal Server Error"));
  }
};

export const deleteAllExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { deletedCount } = await ExempleService.deleteAll();
    if (deletedCount === 0) {
      next(new NotFoundError("No exemple to delete"));
      return;
    }
    res.status(200).send(`${deletedCount} has been deleted successfully`);
  } catch (error: unknown) {
    next(new InternalServerError("Internal Server Error"));
  }
};
