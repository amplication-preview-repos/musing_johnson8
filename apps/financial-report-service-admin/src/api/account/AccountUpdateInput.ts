import { DataRecordUpdateManyWithoutAccountsInput } from "./DataRecordUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  dataRecords?: DataRecordUpdateManyWithoutAccountsInput;
};
