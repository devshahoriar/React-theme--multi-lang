import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@material-tailwind/react/tailwind.css';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading..">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
