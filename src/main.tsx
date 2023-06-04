import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { Provider } from 'react-redux';
import store from '@/app/config/redux/store';

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.log = () => void 0;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
