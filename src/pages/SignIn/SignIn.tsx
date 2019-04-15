import * as React from 'react';
import Base from '../../components/Base/Base';
import UsersController from '../../controllers/users';
import './style.scss';

export default class SignIn extends React.PureComponent<React.Props<React.Component<any>> , {}> {

    public render() {
        return (
            <Base>
                <div className="signIn">
                    <form onSubmit={this.signIn}> 
                        <input type="text" name="username" placeholder="Enter username" />
                        <input type="password" name="password" placeholder="Enter password" />
                        <button type="submit"> Sign In </button>
                    </form>
                </div>
            </Base>
        );
    }

    private signIn(e: any) {
        e.preventDefault();
       
        const userData = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
        };

        const onSuccess = (data) => window.location.pathname = '/';

        // TODO: display errors
        const onError = (res) => console.log(res);

        UsersController.signIn(userData, onSuccess, onError);
    }
}
