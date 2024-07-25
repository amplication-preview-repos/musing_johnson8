import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { DataRecordList } from "./dataRecord/DataRecordList";
import { DataRecordCreate } from "./dataRecord/DataRecordCreate";
import { DataRecordEdit } from "./dataRecord/DataRecordEdit";
import { DataRecordShow } from "./dataRecord/DataRecordShow";
import { BudgetCategoryList } from "./budgetCategory/BudgetCategoryList";
import { BudgetCategoryCreate } from "./budgetCategory/BudgetCategoryCreate";
import { BudgetCategoryEdit } from "./budgetCategory/BudgetCategoryEdit";
import { BudgetCategoryShow } from "./budgetCategory/BudgetCategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FinancialReportService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="DataRecord"
          list={DataRecordList}
          edit={DataRecordEdit}
          create={DataRecordCreate}
          show={DataRecordShow}
        />
        <Resource
          name="BudgetCategory"
          list={BudgetCategoryList}
          edit={BudgetCategoryEdit}
          create={BudgetCategoryCreate}
          show={BudgetCategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
