import * as React from 'react';
import Base from '../../components/Base/Base';
import Account from '../../models/Account';
import AccountController from '../../controllers/accounts';
import AccountList from '../../components/Account/AccountList';
import AccountForm from '../../components/Account/AccountForm';

import './style.scss';

interface UserHomeState {
    accounts: Array<Account>;
}

export default class UserHome extends React.PureComponent<React.Props<React.Component<any>>, UserHomeState> {
    constructor(props) {
        super(props);
        this.state = {
            accounts:[]
        };
    }

    getAccounts(accounts: any){
        this.setState({
            accounts: accounts
        });
    }
    
    deleteAccount(id: number){
        const accounts: Account[] = this.state.accounts.filter(
            (account: Account) => account.id !== id 
        );
        this.setState({
            accounts: accounts
        });
        AccountController.remove(id, (data)=>{console.log(data)}, (e)=>{console.log(e)});
    }

    addAccount(email: string){
        AccountController.create(email, 
            (data)=>{
                const accounts: Account[] = this.state.accounts.concat([data]);
                this.setState({
                    accounts: accounts
                });
            }, 
            (e)=>{console.log(e)}
        );
    }

    updateAccount(id: number, email: string){
        AccountController.update(id, email, (data)=>{console.log(data)}, (e)=>{console.log(e)});
    }

    componentWillMount() {
        AccountController.get((data)=>{this.getAccounts(data)}, (e)=>{console.log(e)});
    }

    render() {
        return (
            <Base>
                <div className="userHome">
                    <h2> Add Acount </h2>
                    <AccountForm  addAccount={this.addAccount.bind(this)}/>
                    <hr/>
                    <h2> Accounts </h2>
                    <ul>
                        <AccountList 
                            accounts={this.state.accounts} 
                            deleteAccount={this.deleteAccount.bind(this)}
                            updateAccount={this.updateAccount.bind(this)}
                        />
                    </ul>
                </div>
            </Base>
        );
    }
}