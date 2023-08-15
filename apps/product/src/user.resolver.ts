import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly productService: ProductService) {}

  @ResolveField(() => [Product])
  product(@Parent() user: User): Product[] {
    return this.productService.getProductOfOwner(user.id);
  }
}
