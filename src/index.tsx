import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {mainStore} from "./stores/mainStore";
import { MoralisProvider } from 'react-moralis';
import Moralis from "moralis";
import {ModalConstructor} from "./components/modals/modalConstructor/modalConstructor";
import axios from "axios";
// //Moralis.start({ serverUrl : "https://p3hmnjsc9iyv.usemoralis.com:2053/server", appId : "ezQDEaeNmCAGkSvIGHURBDVbTl5x6oEmX3JXfzS4" });
// axios.defaults.baseURL = 'https://deep-index.moralis.io/api/v2';
// axios.defaults.headers.common['X-API-KEY'] = process.env.REACT_APP_X_API_KEY ?? 'update api key';

ReactDOM.render(
  <React.StrictMode>
      <MoralisProvider serverUrl='https://p3hmnjsc9iyv.usemoralis.com:2053/server' appId="ezQDEaeNmCAGkSvIGHURBDVbTl5x6oEmX3JXfzS4">
      <Provider store={mainStore()}>
          <BrowserRouter>
              <App />
              <ModalConstructor/>
          </BrowserRouter>
      </Provider>
      </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
