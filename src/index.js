import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import  ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
const root=createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-4gs6g8lpk2104kzf.us.auth0.com"
    clientId="qZnGDunatVKeXquYY3OUV22eJ1f4kxwL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
</Auth0Provider>
);
// ReactDOM.render(<App/>,document.getElementById('root'))