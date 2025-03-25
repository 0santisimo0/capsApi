import { ProductRepository } from "../../application/interfaces/product-repository.interface";
import { Product } from "../../domain/entities/product.entity";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find(p => p.id === id) || null;
  }

  async update(product: Product): Promise<void> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter(p => p.id !== id);
  }
}
