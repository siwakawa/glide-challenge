import * as React from 'react';
import Base from '../../components/Base/Base';
import Input from '../../components/Input/Input';
import UsersController from '../../controllers/users';
import './style.scss';

export default class GuestHome extends React.PureComponent<React.Props<React.Component<any>>, {}> {
    private username: Input;
    private email: Input;
    private password: Input;

    public render() {
        return (
            <Base>
                <div className="guestHome">
                    <h2>Welcome to Glide Challenge</h2>
                    <h4>Santiago Iwakawa</h4>
                </div>
            </Base>
        );
    }

    private signUp() {
        const userData = {
            username: this.username.getValue(),
            email: this.email.getValue(),
            password: this.password.getValue(),
        };

        const onSuccess = (data) => {
            console.log(data);
            window.location.pathname = '/';
        };

        const onError = (res) => {
            console.log(res);
        };

        UsersController.signUp(userData, onSuccess, onError);
    }
}
