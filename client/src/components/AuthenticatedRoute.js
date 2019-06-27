import React from "react";
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={props => (
                window.sessionStorage.getItem('user-token') !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                            pathname: '/signin',
                            state: { from: props.location }
                        }}
                    />
                )
            )}
        />
    );
}



export default AuthenticatedRoute;