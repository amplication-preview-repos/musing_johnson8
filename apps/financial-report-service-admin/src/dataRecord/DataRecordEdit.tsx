import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BudgetCategoryTitle } from "../budgetCategory/BudgetCategoryTitle";
import { AccountTitle } from "../account/AccountTitle";

export const DataRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="dateGenerated" source="dateGenerated" />
        <ReferenceInput
          source="budgetCategory.id"
          reference="BudgetCategory"
          label="BudgetCategory"
        >
          <SelectInput optionText={BudgetCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
