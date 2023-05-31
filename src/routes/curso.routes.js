//rutas de acceso
import { Router } from "express";
import {
  getCurso,
  createNewCurs,
  getCursById,
  deleteCursById,
  getTotalCurso,
  updateCursById,
} from "../controllers/curso.controllers";

const router = Router();
router.get("/curso", getCurso);
router.post("/curso", createNewCurs);
router.get("/curso/count", getTotalCurso);
router.get("/curso/:id", getCursById);
router.delete("/curso/:id", deleteCursById);
router.put("/curso/:id", updateCursById);

export default router;