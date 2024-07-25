import { DataRecord as TDataRecord } from "../api/dataRecord/DataRecord";

export const DATARECORD_TITLE_FIELD = "id";

export const DataRecordTitle = (record: TDataRecord): string => {
  return record.id?.toString() || String(record.id);
};
