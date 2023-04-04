import { BaseService } from "medusa-interfaces";

console.info("============demo service");
export default class DemoService extends BaseService {
  private productService;
  constructor({ productService }) {
    super();

    this.productService = productService;
  }

  async getProductMessage() {
    const [product] = await this.productService.list({}, { take: 1 });

    return `Welcome to ${product.title}!`;
  }
}
