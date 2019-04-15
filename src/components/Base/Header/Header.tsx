import * as React from 'react';
import { NavLink } from 'react-router-dom';
import UsersController from '../../../controllers/users';
import './style.scss';

interface HeaderProps extends React.Props<React.Component<any>> {
}

export default class Header extends React.PureComponent<HeaderProps, {}> {
    public render() {
        return (
            <header className="header">
                <main className="header__main">
                    <NavLink
                        to="/"
                        className="header__homeLink">
                        <img src="https://d3buf9eg8oldj9.cloudfront.net/assets/glide-logo.png" alt="" />
                    </NavLink>

                    {this.renderNavigationLinks()}
                </main>
            </header>
        );
    }

    private renderNavigationLinks() {
        if (!this.isSignedIn()) {
            return (
                <NavLink
                    to="/login"
                    className="header__signIn">
                    Sign in
                </NavLink>
            );
        }else{
            return (
                <NavLink
                    to="/"
                    className="header__signIn"
                    onClick={(e)=>{
                        const onSuccess = (data) => window.location.pathname = '/login';

                        const onError = (res) => console.log(res);

                        UsersController.signOut(onSuccess, onError);
                    }}
                    >
                    Log Out
                </NavLink>
            )
        }
    }

    private isSignedIn() {
        return !!window.user;
    }
}
