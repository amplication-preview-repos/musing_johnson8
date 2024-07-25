import { BudgetCategory } from "../budgetCategory/BudgetCategory";
import { Account } from "../account/Account";

export type DataRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  dateGenerated: Date | null;
  budgetCategory?: BudgetCategory | null;
  account?: Account | null;
};
