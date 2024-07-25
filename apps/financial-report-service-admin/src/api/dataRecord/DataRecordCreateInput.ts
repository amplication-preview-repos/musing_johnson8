import { BudgetCategoryWhereUniqueInput } from "../budgetCategory/BudgetCategoryWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type DataRecordCreateInput = {
  amount?: number | null;
  dateGenerated?: Date | null;
  budgetCategory?: BudgetCategoryWhereUniqueInput | null;
  account?: AccountWhereUniqueInput | null;
};
