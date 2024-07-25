import { DataRecordCreateNestedManyWithoutAccountsInput } from "./DataRecordCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  dataRecords?: DataRecordCreateNestedManyWithoutAccountsInput;
};
