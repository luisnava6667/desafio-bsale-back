import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

  public async findAll(): Promise<Product[]> {
    return this.productRepository.find()
  }

  public async findByName(name: string): Promise<Product[]> {
    return this.productRepository.find({
      name: Like(`%${name}%`)
    })
  }

  public async findByCategory(idCategory: number): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        category: idCategory
      }
    })
  }
}
