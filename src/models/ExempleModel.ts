import { Schema, model } from "mongoose";

const exempleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    });

export const ExempleModel = model('Exemple', exempleSchema);