import { Module } from '@nestjs/common';
import { ProductController } from './presentation/controllers/product.controller';
import { ProductRepository } from './application/interfaces/product-repository.interface';
import { InMemoryProductRepository } from './infrastructure/repositories/product.repository.interface';
import { CreateProductUseCase } from './application/use-cases/create-product.usecase';
import { UpdateProductUseCase } from './application/use-cases/update-product.usecase';
import { GetProductUseCase } from './application/use-cases/get-product.usecase';
import { DeleteProductUseCase } from './application/use-cases/delete-product.usecase';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductController,
      useClass: InMemoryProductRepository,
    },
    CreateProductUseCase,
    UpdateProductUseCase,
    GetProductUseCase,
    DeleteProductUseCase,
  ],
})
export class AppModule {}
