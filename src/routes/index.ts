import { Router } from "express";
import {
  createExemple,
  getExemples,
  getExemple,
  updateExemple,
  deleteExemple,
  deleteAllExemple,
} from "../controllers/exempleController";
import { setTestError } from "../controllers/testErrorController";

export const router = Router();

router.post("/exemples", createExemple);
router.get("/exemples", getExemples);
router.get("/exemples/:id", getExemple);
router.patch("/exemples/:id", updateExemple);
router.delete("/exemples/:id", deleteExemple);
router.delete("/exemples", deleteAllExemple);

router.get("/error", setTestError);
