import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) { }

  @Get('all')
  public async findAll() {
    return await this.productService.findAll()
  }

  @Get('name/:name')
  public async findByName(@Param() { name }) {
    return await this.productService.findByName(name)
  }

  @Get('category/:idCategory')
  public async findByCategory(@Param() { idCategory }) {
    return await this.productService.findByCategory(idCategory)
  }
}
