import { DataRecord } from "../dataRecord/DataRecord";

export type BudgetCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categoryName: string | null;
  dataRecords?: Array<DataRecord>;
};
