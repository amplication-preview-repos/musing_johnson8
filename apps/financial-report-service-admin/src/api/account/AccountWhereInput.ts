import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataRecordListRelationFilter } from "../dataRecord/DataRecordListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  accountNumber?: StringNullableFilter;
  dataRecords?: DataRecordListRelationFilter;
};
