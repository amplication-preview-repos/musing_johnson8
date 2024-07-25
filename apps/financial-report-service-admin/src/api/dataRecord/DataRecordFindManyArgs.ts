import { DataRecordWhereInput } from "./DataRecordWhereInput";
import { DataRecordOrderByInput } from "./DataRecordOrderByInput";

export type DataRecordFindManyArgs = {
  where?: DataRecordWhereInput;
  orderBy?: Array<DataRecordOrderByInput>;
  skip?: number;
  take?: number;
};
