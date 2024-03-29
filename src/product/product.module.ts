import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEntity } from '../category/entities/category.entity'
import { ProductEntity } from './entities/product.entity'

@Module({
	controllers: [ProductController],
	providers: [ProductService],
	imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity])]
})
export class ProductModule {}
