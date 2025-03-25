import { ProductRepository } from "../interfaces/product-repository.interface";
import { Product } from "../../domain/entities/product.entity";

export class GetProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }
}