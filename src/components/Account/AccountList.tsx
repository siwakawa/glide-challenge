import * as React from 'react';
import Account from '../../models/Account';
import AccountElement from './AccountElement';

export default class AccountList extends React.Component<IAccountListProps, any> {

    render(): JSX.Element[] {
        return this.props.accounts.map((account:Account, i:number)=>{
          return (
            <AccountElement 
                content={account.email} 
                actionDelete={() => this.props.deleteAccount(account.id)}
                actionUpdate={(content) => this.props.updateAccount(account.id,content)}
            />
          )  
        });
    }

}

interface IAccountListProps {
    accounts: Account[];
    deleteAccount: (id:number ) => void;
    updateAccount: (id:number, content:string) => void;
}