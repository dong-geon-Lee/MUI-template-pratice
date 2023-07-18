import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'contexts/ConfigContext';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persister } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ReduxProvider store={store}>
    {/* <PersistGate loading={null} persistor={persister}> */}
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
    {/* </PersistGate> */}
  </ReduxProvider>
);
