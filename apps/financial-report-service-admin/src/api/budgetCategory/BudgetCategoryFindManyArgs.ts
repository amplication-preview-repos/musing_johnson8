import { BudgetCategoryWhereInput } from "./BudgetCategoryWhereInput";
import { BudgetCategoryOrderByInput } from "./BudgetCategoryOrderByInput";

export type BudgetCategoryFindManyArgs = {
  where?: BudgetCategoryWhereInput;
  orderBy?: Array<BudgetCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
