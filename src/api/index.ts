import { Router } from "express";
import demoRoutes from "./demo";

export default (
  rootDirectory: string,
  pluginOptions: { [key: string]: any }
) => {
  const router = Router();

  demoRoutes(router);

  return router;
};
