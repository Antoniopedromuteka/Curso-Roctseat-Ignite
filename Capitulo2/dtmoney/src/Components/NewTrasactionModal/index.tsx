
import Modal from 'react-modal';
import { Container, TrasactionTypeContainer, RadioBox} from './style';

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

                <RadioBox 
                        type="button"
                        onClick={()=> {setType('deposit')} }
                        isActive={type === 'deposit'}
                        activeColor="green"
                       // className={type === 'deposit' ? 'active': ''}

                     
                >
                    <img src={incomeImg} alt="entrada"/>
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    onClick={()=>{setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    type="button" 
                    activeColor="red"
              
                >
                    <img src={outcomeImg} alt="entrada"/>
                    <span>Saida</span>
                </RadioBox>
            </TrasactionTypeContainer>
            

            <input placeholder="Categoria"/>


            <button type="submit">Cadastrar</button>


        </Container>
        
        </Modal>


    );
}