import React from 'react';
import ReactDOM from 'react-dom/client';
import HistoryRouter  from "./utils/HistoryRouter"
import { myHistory } from "./utils/history"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={myHistory}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

