
import Modal from 'react-modal';
import { Container, TrasactionTypeContainer} from './style';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg'
import { useState } from 'react';


interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose?: ()=> void;
}

export function NewTrasactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
    
    const [type, setType] = useState('deposit');
    

    return(

        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            overlayClassName="react-modal-overlay"
             className="react-modal-content"
        >
     

       <button 
                type="button"
                 onClick={onRequestClose} 
                 className="react-modal-close"
        >
            <img src={closeImg} alt="fechar modal"/> 
       </button> 

        <Container>
        <h2>Cadastrar Transação</h2>
            <input placeholder="titulo"/>
            <input type="number" placeholder="valor" />

            <TrasactionTypeContainer>

                <button type="button" onClick={()=> {setType('desposit')}}>
                    <img src={incomeImg} alt="entrada"/>
                    <span>Entrada</span>
                </button>

                <button type="button" onClick={()=>{setType('withdraw')}}>
                    <img src={outcomeImg} alt="entrada"/>
                    <span>Saida</span>
                </button>
            </TrasactionTypeContainer>
            

            <input placeholder="Categoria"/>


            <button type="submit">Cadastrar</button>


        </Container>
        
        </Modal>


    );
}