import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

const appId = 'gBsmYa3787Ui4bx9dEzG30SHocSTsTN4wLZQ7U0E';
const serverURl = 'https://mz7b7tyttewj.usemoralis.com:2053/server';

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverURl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
