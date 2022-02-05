import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './services/firebase';
import registerServiceWorker from "./registerServiceWorker";
import {SnackbarProvider} from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();