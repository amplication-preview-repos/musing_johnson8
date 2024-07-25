import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BudgetCategoryWhereUniqueInput } from "../budgetCategory/BudgetCategoryWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type DataRecordWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  dateGenerated?: DateTimeNullableFilter;
  budgetCategory?: BudgetCategoryWhereUniqueInput;
  account?: AccountWhereUniqueInput;
};
