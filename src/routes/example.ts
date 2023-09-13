import { Router } from "express";
import ExampleController from "../controllers/ExampleController";

const routes = Router();

routes.get('/', ExampleController.example);

export default routes;