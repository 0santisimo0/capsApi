import { Controller, Post, Put, Get, Param, Delete, Body } from "@nestjs/common";
import { CreateProductUseCase } from "../../application/use-cases/create-product.usecase";
import { UpdateProductUseCase } from "../../application/use-cases/update-product.usecase";
import { GetProductUseCase } from "../../application/use-cases/get-product.usecase";
import { DeleteProductUseCase } from "../../application/use-cases/delete-product.usecase";
import { LocalMemoryProductRepository } from "../../infrastructure/repositories/localmemory.repository.interface";

@Controller("products")
export class ProductController {
  private productRepository = new LocalMemoryProductRepository();
  private createProductUseCase = new CreateProductUseCase(this.productRepository);
  private updateProductUseCase = new UpdateProductUseCase(this.productRepository);
  private getProductUseCase = new GetProductUseCase(this.productRepository);
  private deleteProductUseCase = new DeleteProductUseCase(this.productRepository);

  @Post()
  async create(@Body() body: { name: string; price: number; sku: string; category: string; stock: number; description?: string }) {
    const productId = await this.createProductUseCase.execute(body.name, body.price, body.sku, body.category, body.stock, body.description);
    return { message: "Product created successfully!", id: productId };
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() body: { name?: string; price?: number; category?: string; stock?: number; description?: string }) {
    const product = await this.getProductUseCase.execute(id);
    if (!product) return { message: "Product not found" };
    
    Object.assign(product, body);
    await this.updateProductUseCase.execute(product);
    return { message: "Product updated successfully!" };
  }

  @Get(":id")
  async get(@Param("id") id: string) {
    const product = await this.getProductUseCase.execute(id);
    if (!product) return { message: "Product not found" };
    return product;
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    await this.deleteProductUseCase.execute(id);
    return { message: "Product deleted successfully!" };
  }
}
