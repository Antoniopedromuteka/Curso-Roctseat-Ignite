import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import {App} from './App';



createServer({

  models:{
    transaction: Model, 
  },

  routes(){
    this.namespace = 'api'; 


    this.get('/transaction', ()=>{ 
      return this.schema.all('trasiction')
    })


    this.post('/transaction', (scheme, request)=>{

      const data = JSON.parse(request.requestBody);

      return scheme.create('transaction', data);

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
