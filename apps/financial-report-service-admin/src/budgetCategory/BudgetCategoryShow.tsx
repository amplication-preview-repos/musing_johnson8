import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUDGETCATEGORY_TITLE_FIELD } from "./BudgetCategoryTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const BudgetCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="categoryName" source="categoryName" />
        <ReferenceManyField
          reference="DataRecord"
          target="budgetCategoryId"
          label="DataRecords"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="dateGenerated" source="dateGenerated" />
            <ReferenceField
              label="BudgetCategory"
              source="budgetcategory.id"
              reference="BudgetCategory"
            >
              <TextField source={BUDGETCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
