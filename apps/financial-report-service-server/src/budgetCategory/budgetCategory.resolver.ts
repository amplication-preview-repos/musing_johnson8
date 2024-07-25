import * as graphql from "@nestjs/graphql";
import { BudgetCategoryResolverBase } from "./base/budgetCategory.resolver.base";
import { BudgetCategory } from "./base/BudgetCategory";
import { BudgetCategoryService } from "./budgetCategory.service";

@graphql.Resolver(() => BudgetCategory)
export class BudgetCategoryResolver extends BudgetCategoryResolverBase {
  constructor(protected readonly service: BudgetCategoryService) {
    super(service);
  }
}
