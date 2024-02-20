import { NextFunction, Request, Response } from "express";
import { ExempleService } from "../services/exempleService";
import { NoExempleFoundError } from "../utils/ApiError";
import {
  ExempleCreationSchema,
  ExempleUpdateSchema,
} from "../DTO/ExempleBodySchema";
import { exempleIdQuery } from "../DTO/ExempleIdQuery";

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
  res.json(Exemples);
};

export const getExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = exempleIdQuery.parse(req.params);
    const Exemple = await ExempleService.findById(id);
    if (!Exemple) {
      next(new NoExempleFoundError(id));
      console.log("here");
      return;
    }
    res.json(Exemple);
  } catch (error) {
    next(error);
  }
};

export const updateExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = exempleIdQuery.parse(req.params);
    const parsedBody = ExempleUpdateSchema.parse(req.body);
    const updatedExemple = await ExempleService.update(id, parsedBody);
    if (!updatedExemple) {
      next(new NoExempleFoundError(id));
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
    const { id } = exempleIdQuery.parse(req.params);
    const { deletedCount } = await ExempleService.delete(id);
    if (deletedCount === 0) {
      next(new NoExempleFoundError(id));
      return;
    }
    res.status(200).send(`Exemple with id ${id} has been deleted`);
  } catch (error: unknown) {
    next(error);
  }
};

export const deleteAllExemple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { deletedCount } = await ExempleService.deleteAll();

    res.status(200).send(`${deletedCount} has been deleted successfully`);
  } catch (error: unknown) {
    next(error);
  }
};
