export class Product {
    constructor(
      public readonly id: string,
      public name: string,
      public price: number,
      public sku: string,
      public category: string,
      public stock: number,
      public description?: string
    ) {}
  }