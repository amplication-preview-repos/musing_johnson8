import { SortOrder } from "../../util/SortOrder";

export type DataRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  dateGenerated?: SortOrder;
  budgetCategoryId?: SortOrder;
  accountId?: SortOrder;
};
