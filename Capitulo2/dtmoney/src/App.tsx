

import {GlobalStyle} from '../src/styles/global';
import Modal from 'react-modal';
import { Header} from './Components/Header';
import { Dashboard } from './Components/Dashboard';
import {useState} from 'react';
import { NewTrasactionModal } from './Components/NewTrasactionModal';
 

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>

      <Header onOpenNewTransitionModal={handleOpenTransactionModal}/>

      <Dashboard/>

     <NewTrasactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
    </>  
  );
}

 
