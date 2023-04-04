import { Router } from "express";
import DemoService from "../services/demo";

console.info("============ api demo");
export default (router: Router) => {
  //const router = Router();
  router.get("/demo", async (req, res) => {
    const demoService: DemoService = req.scope.resolve("demoService");
    let msg = await demoService.getMessage();
    res.json({
      message: "Welcome to Medusa!",
      m1: "oggg",
      msg,
    });
  });
};
