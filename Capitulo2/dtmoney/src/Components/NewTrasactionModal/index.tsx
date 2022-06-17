
import Modal from 'react-modal';
import { Container, TrasactionTypeContainer, RadioBox} from './style';
import { api } from '../../services/api';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react';
import {useContext} from 'react';
import { TransactionContext } from '../../TransactionContext';


interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTrasactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
    
    const {createTransaction} = useContext(TransactionContext);
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    
    async function handleCreateNewTrasaction(event:FormEvent){

        event.preventDefault();



        await createTransaction({
            
            title,
            amount,
            type,
            category,
        })

        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
        
    }

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

        <Container onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastrar Transação</h2>
            <input placeholder="titulo" onChange={(event) => setTitle(event.target.value)}/>
            <input type="number" placeholder="valor" value={amount}  onChange={(event) => setAmount(Number(event.target.value))}/>

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
            

            <input placeholder="Categoria"   value={category} onChange={(event) => setCategory(event.target.value)}/>


            <button type="submit">Cadastrar</button>


        </Container>
        
        </Modal>


    );
}