import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataRecordListRelationFilter } from "../dataRecord/DataRecordListRelationFilter";

export type BudgetCategoryWhereInput = {
  id?: StringFilter;
  categoryName?: StringNullableFilter;
  dataRecords?: DataRecordListRelationFilter;
};
