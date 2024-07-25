import { DataRecordCreateNestedManyWithoutBudgetCategoriesInput } from "./DataRecordCreateNestedManyWithoutBudgetCategoriesInput";

export type BudgetCategoryCreateInput = {
  categoryName?: string | null;
  dataRecords?: DataRecordCreateNestedManyWithoutBudgetCategoriesInput;
};
