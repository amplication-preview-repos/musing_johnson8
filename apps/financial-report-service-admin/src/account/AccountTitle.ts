import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "accountNumber";

export const AccountTitle = (record: TAccount): string => {
  return record.accountNumber?.toString() || String(record.id);
};
