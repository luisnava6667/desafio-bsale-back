import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  url_image: string

  @Column({ type: 'float' })
  price: number

  @Column()
  discount: number

  @ManyToOne(type => Category, category => category.product, {})
  @JoinColumn({ name: 'category' })
  category: Category
  
}