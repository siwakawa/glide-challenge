import * as React from 'react';

export default class AccountForm extends React.Component<IAccountForm> {

    state = {
        content: '',
        validEmail: true
    }

    onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            content: e.target.value,
            validEmail: re.test(e.target.value)
        }); 
    }

    addAccount = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if(this.state.validEmail){
            this.props.addAccount(this.state.content);
            this.setState({ content: '' });
        }
    }

    render() {
        const {validEmail} = this.state;
        return(
            <form onSubmit={this.addAccount}> 
                <input type="text" value={this.state.content} placeholder="Enter email" className={validEmail?'':'danger'} onChange={this.onContentChange}/>
                <button type="submit"> <i className="fa fa-plus"></i> </button> 
            </form>
        )
    }
}

interface IAccountForm{
    addAccount: (content:string) => void;
}