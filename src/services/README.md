# Custom services

You may define custom services that will be registered on the global container by creating files in the `/services` directory that export an instance of `BaseService`.

```js
import { ProductService, TransactionBaseService } from "@medusajs/medusa"
import { EntityManager } from "typeorm"

class DemoService extends TransactionBaseService {
  protected manager_: EntityManager
  protected transactionManager_: EntityManager
  private productService: ProductService

  constructor(container) {
    super(container)
    this.productService = container.productService
  }
  async getMessage() {
    let count = await this.productService.count();
    return `Welcome to My Store! count=[${count}]`
  }
}


export default DemoService;
```

The first argument to the `constructor` is the global giving you access to easy dependency injection. The container holds all registered services from the core, installed plugins and from other files in the `/services` directory. The registration name is a camelCased version of the file name with the type appended i.e.: `my.js` is registered as `myService`, `custom-thing.js` is registerd as `customThingService`.

You may use the services you define here in custom endpoints by resolving the services defined.

```js
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

```
