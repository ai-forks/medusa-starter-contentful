import { ProductService, TransactionBaseService } from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import { Demo } from "../models/demo";


class DemoService extends TransactionBaseService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;
  private productService: ProductService;
  private demoRepository;
  constructor(container) {
    super(container);
    //console.info("container", Object.keys(container));
    this.productService = container.productService;
    //this.demoRepository = container.demoRepository;
  }
  async getMessage() {
    let count = await this.productService.count();
    return `Welcome to My Store! count=[${count}][]`;
  }
}

export default DemoService;
