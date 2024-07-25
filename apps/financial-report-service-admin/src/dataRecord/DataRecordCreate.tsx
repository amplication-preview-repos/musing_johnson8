import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BudgetCategoryTitle } from "../budgetCategory/BudgetCategoryTitle";
import { AccountTitle } from "../account/AccountTitle";

export const DataRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
