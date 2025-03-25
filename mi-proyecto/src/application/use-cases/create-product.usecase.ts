import { v4 as uuidv4 } from 'uuid';
import { ProductRepository } from "../interfaces/product-repository.interface";
import { Product } from "../../domain/entities/product.entity";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    name: string,
    price: number,
    sku: string,
    category: string,
    stock: number,
    description?: string
  ): Promise<string> {
    const product = new Product(uuidv4(), name, price, sku, category, stock, description);
    await this.productRepository.create(product);
    return product.id;  
  }
}
