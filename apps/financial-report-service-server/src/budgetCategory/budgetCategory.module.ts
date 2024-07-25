import { Module } from "@nestjs/common";
import { BudgetCategoryModuleBase } from "./base/budgetCategory.module.base";
import { BudgetCategoryService } from "./budgetCategory.service";
import { BudgetCategoryController } from "./budgetCategory.controller";
import { BudgetCategoryResolver } from "./budgetCategory.resolver";

@Module({
  imports: [BudgetCategoryModuleBase],
  controllers: [BudgetCategoryController],
  providers: [BudgetCategoryService, BudgetCategoryResolver],
  exports: [BudgetCategoryService],
})
export class BudgetCategoryModule {}
