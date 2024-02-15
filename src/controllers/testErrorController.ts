import { Request, Response } from 'express';

export const setTestError = (req: Request, res: Response) => {
    throw new Error('Test error Succesfuly!');
};