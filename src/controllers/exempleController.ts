// src/controllers/ExempleController.ts
import { NextFunction, Request, Response } from 'express';
import { ExempleService } from '../services/exempleService';
import { BadRequestError, InternalServerError, NotFoundError } from '../utils/ApiError';
import mongoose from 'mongoose';

export const createExemple = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Exemple = await ExempleService.create(req.body);
        res.status(201).json(Exemple);
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === 'ValidationError') {
                next(new BadRequestError(error.message));
            }             
        } else {
            next(new InternalServerError('Internal Server Error'));
        }
    }
};

export const getExemples = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Exemples = await ExempleService.findAll();
        if (Exemples.length === 0) {
            next(new NotFoundError('No Exemples found \n Please create a new Exemple!'));
        }
        res.json(Exemples);
    } catch (error) {
        next(new InternalServerError('Internal Server Error'));
    }
};

export const getExemple = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            throw new BadRequestError('Invalid format id');
        }
        const Exemple = await ExempleService.findById(req.params.id);
        if (!Exemple) {
            throw new NotFoundError('Exemple not found');
        }
        res.json(Exemple);
    } catch (error) {
        next(error);
    }
};

export const updateExemple = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            throw new BadRequestError('Invalid format id');
        }
        const updatedExemple = await ExempleService.update(req.params.id, req.body);
        if (!updatedExemple) {
            throw new NotFoundError('Exemple not found');
        }
        res.json(updatedExemple);
    } catch (error: unknown) {
        next(error);
    }
};


export const deleteExemple = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) {
            throw new BadRequestError('Invalid format id');
        }
        const { deletedCount } = await ExempleService.delete(req.params.id);
        if (deletedCount === 0) {
            throw new NotFoundError('Exemple not found');
        }
        res.status(200).send(`Exemple with id ${req.params.id} has been deleted`);
    } catch (error: unknown) {
        next(error);
    }
};

