import { Schema, model } from "mongoose";

const exempleSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String  },
});

export const ExempleModel = model("Exemple", exempleSchema);
