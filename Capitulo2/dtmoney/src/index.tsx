import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import {App} from './App';



createServer({

  models:{
    transactions: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'freelancer de webSite',
          type: 'deposit',
          category:'Dev',
          amount: 6000,
          creatAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category:'Casa',
          amount: 1100,
          creatAt: new Date('2021-02-14 11:00:00')
        },

      ],
    })
  },

  routes(){
    this.namespace = 'api'; 


    this.get('/transactions', ()=>{ 
      return this.schema.all('transactions')
    })


    this.post('/transactions', (scheme, request)=>{

      const data = JSON.parse(request.requestBody);

      return scheme.create('transactions', data);

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
