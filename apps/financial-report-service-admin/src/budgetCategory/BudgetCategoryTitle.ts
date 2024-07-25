import { BudgetCategory as TBudgetCategory } from "../api/budgetCategory/BudgetCategory";

export const BUDGETCATEGORY_TITLE_FIELD = "categoryName";

export const BudgetCategoryTitle = (record: TBudgetCategory): string => {
  return record.categoryName?.toString() || String(record.id);
};
