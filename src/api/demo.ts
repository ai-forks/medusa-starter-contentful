import { Router } from "express";

console.info("============ api demo");
export default () => {
  const router = Router();

  router.get("/demo", (req, res) => {
    const demoService = req.scope.resolve("demoService");
    let msg = demoService.getProductMessage();
    res.json({
      message: "Welcome to Medusa!",
      msg,
    });
  });
};
