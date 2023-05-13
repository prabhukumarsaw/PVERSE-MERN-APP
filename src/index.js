import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-2bd10kkjoycwdphe.us.auth0.com"
  clientId="1yEliMLCRjBxv4N4vESse9HXfgtBisxc"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

