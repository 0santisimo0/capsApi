import { Product } from "../../domain/entities/product.entity";


export interface ProductRepository {
    create(product: Product): Promise<void>;
    findById(id: string): Promise<Product | null>;
    update(product: Product): Promise<void>;
    delete(id: string): Promise<void>;
  }