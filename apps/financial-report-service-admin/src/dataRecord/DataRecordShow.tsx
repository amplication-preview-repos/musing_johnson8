import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { BUDGETCATEGORY_TITLE_FIELD } from "../budgetCategory/BudgetCategoryTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const DataRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
