import { DataRecord } from "../dataRecord/DataRecord";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accountNumber: string | null;
  dataRecords?: Array<DataRecord>;
};
