// src/controllers/ExempleController.ts
import { Request, Response } from 'express';
import { ExempleService } from '../services/exempleService';

export const createExemple = async (req: Request, res: Response) => {
    try {
        const Exemple = await ExempleService.create(req.body);
        res.status(201).json(Exemple);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getExemples = async (req: Request, res: Response) => {
    try {
        const Exemples = await ExempleService.findAll();
        res.json(Exemples);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getExemple = async (req: Request, res: Response) => {
    try {
        const Exemple = await ExempleService.findById(req.params.id);
        if (Exemple) {
            res.json(Exemple);
        } else {
            res.status(404).send('Exemple not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateExemple = async (req: Request, res: Response) => {
    try {
        const updatedExemple = await ExempleService.update(req.params.id, req.body);
        if (updatedExemple) {
            res.json(updatedExemple);
        } else {
            res.status(404).send('Exemple not found');
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteExemple = async (req: Request, res: Response) => {
    try {
        const { deletedCount } = await ExempleService.delete(req.params.id);
        if (deletedCount) {
            res.status(200).send(
                `Exemple with id ${req.params.id} has been deleted`
            ); 
        } else {
            res.status(404).send('Exemple not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
