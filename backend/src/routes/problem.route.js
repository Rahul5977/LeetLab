import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware.js";
import {
  createProblem,
  deleteProblem,
  getAllProblem,
  getAllProblemById,
  getAllProblemSolvedByuser,
  updateProblem,
} from "../controllers/problem.controllers.js";

const problemRoutes = express.Router();

problemRoutes.post("/create-problem", authMiddleware, checkAdmin, createProblem);
problemRoutes.get("/get-all-problems", authMiddleware, getAllProblem);
problemRoutes.get("/get-all-problems/:id", authMiddleware, getAllProblemById);
problemRoutes.put("/update-problem/:id", authMiddleware, checkAdmin, updateProblem);
problemRoutes.delete("/delete-problem/:id", authMiddleware, checkAdmin, deleteProblem);
problemRoutes.get("/get-solved-problem", authMiddleware, getAllProblemSolvedByuser);

export default problemRoutes;
