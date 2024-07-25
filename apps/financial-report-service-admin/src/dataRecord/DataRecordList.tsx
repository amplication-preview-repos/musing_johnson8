import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BUDGETCATEGORY_TITLE_FIELD } from "../budgetCategory/BudgetCategoryTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const DataRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DataRecords"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
