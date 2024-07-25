import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BudgetCategoryService } from "./budgetCategory.service";
import { BudgetCategoryControllerBase } from "./base/budgetCategory.controller.base";

@swagger.ApiTags("budgetCategories")
@common.Controller("budgetCategories")
export class BudgetCategoryController extends BudgetCategoryControllerBase {
  constructor(protected readonly service: BudgetCategoryService) {
    super(service);
  }
}
