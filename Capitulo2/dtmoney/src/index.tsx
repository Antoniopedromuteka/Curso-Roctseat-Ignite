import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import {App} from './App';



createServer({
  routes(){
    this.namespace = 'api'; 

    this.get('/transactions', ()=>{
      return[
        {
          id: 1,
          title: 'Trasaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})
 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
