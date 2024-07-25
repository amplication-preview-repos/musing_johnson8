import { DataRecordUpdateManyWithoutBudgetCategoriesInput } from "./DataRecordUpdateManyWithoutBudgetCategoriesInput";

export type BudgetCategoryUpdateInput = {
  categoryName?: string | null;
  dataRecords?: DataRecordUpdateManyWithoutBudgetCategoriesInput;
};
