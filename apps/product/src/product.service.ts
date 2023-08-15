import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];
  create(createProductInput: CreateProductInput) {
    this.products.push(createProductInput);
    return createProductInput;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  getProductOfOwner(ownerId: string) {
    return this.products.filter((product) => product.ownerId === ownerId);
  }

  // update(id: number, updateProductInput: UpdateProductInput) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
