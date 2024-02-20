import { ExempleData, UpdateExempleData } from "../DTO/ExempleBodySchema";
import { ExempleModel } from "../models/ExempleModel";

export const ExempleService = {
  create: async (data: ExempleData) => {
    const Exemple = new ExempleModel(data);
    return Exemple.save();
  },
  findAll: async () => {
    return ExempleModel.find();
  },
  findById: async (id: string) => {
    return ExempleModel.findById(id);
  },
  update: async (id: string, data: UpdateExempleData) => {
    return ExempleModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id: string) => {
    return ExempleModel.deleteOne({ _id: id });
  },
  deleteAll: async () => {
    return ExempleModel.deleteMany();
  },
};
