import * as React from 'react';
import { NavLink } from 'react-router-dom';
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
        }
    }

    private isSignedIn() {
        return !!window.user;
    }
}
