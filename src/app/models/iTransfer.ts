import { ICheckingAccount } from "./iCheckingAccount";
import { IUser } from "./iuser";

export interface ITransfer {
    id: number;
    userId: IUser;
    checkingAccount: ICheckingAccount;
    amount: number;
    hash: String;
    checkingAccountDestination: number;
    bankDestination: String;
    nameDestination: String;
    createdAt: Date;
    updatedAt: Date;
}

