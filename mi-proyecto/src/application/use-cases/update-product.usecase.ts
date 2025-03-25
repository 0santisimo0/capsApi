import { ProductRepository } from "../../domain/interfaces/product-repository.interface";
import { Product } from "../../domain/entities/product.entity";

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: Product): Promise<void> {
    await this.productRepository.update(product);
  }
}
