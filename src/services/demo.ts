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