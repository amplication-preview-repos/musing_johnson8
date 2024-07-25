import { SortOrder } from "../../util/SortOrder";

export type BudgetCategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  categoryName?: SortOrder;
};
