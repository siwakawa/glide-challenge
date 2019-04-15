import * as React from 'react';


export default class AccountElement extends React.Component<IAccountElement> {

    state = {
        confirmRemove:0,
        validEmail:true,
        content: this.props.content
    }

    onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            content: e.target.value,
            validEmail: re.test(e.target.value)
        }); 
    }

    onPressUpdate = () => {
        if(this.state.validEmail)
            this.props.actionUpdate(this.state.content);
    }

    onPressDelete = () => {
        const {confirmRemove} = this.state;
        this.setState({
            confirmRemove: confirmRemove + 1
        }); 
        if(this.state.confirmRemove){this.props.actionDelete()}
    }

    resetDelete = () => {
        const {confirmRemove} = this.state;
        this.setState({
            confirmRemove: confirmRemove -1
        }); 
    }

    render() {
        const {confirmRemove, content, validEmail} = this.state;
        return (
            <li>
                <input type="text" className={validEmail?'':'danger'} value={content} onChange={this.onContentChange} />
                <button onClick={this.onPressUpdate}> <i className="fa fa-save"></i> </button>
                <button onClick={this.onPressDelete} onBlur={this.resetDelete} className={confirmRemove?'danger':''}> <i className="fa fa-trash-o"></i> </button>
            </li>
        )
    }
}

interface IAccountElement{
    actionDelete: () => void;
    actionUpdate: (content:string) => void;
    content: string;
}