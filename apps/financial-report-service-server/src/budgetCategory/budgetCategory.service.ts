import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BudgetCategoryServiceBase } from "./base/budgetCategory.service.base";

@Injectable()
export class BudgetCategoryService extends BudgetCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
