//Higher Order Component, componente (HOC) que renderiza otro componente (un componente normal)...
//HOC, reusar código...
//Manipulación de props

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Esta es la infornación: {props.info}</p>
    </div>
);

//Una función normal...
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Está es información privada, no compartir</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//La variable es un componente...
const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {
            props.isAuthencated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Por favor auténticate para ver la información</p>
            )
        }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo 
        info="Jorge Rubiano"
        isAuthencated
    />, 
    document.getElementById("app")  
);

/*
ReactDOM.render(
    <AdminInfo 
        info="Jorge Rubiano"
        isAdmin={true}
    />, 
    document.getElementById("app")  
);
*/