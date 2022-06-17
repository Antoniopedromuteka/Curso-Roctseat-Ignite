
import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from "../../assets/total.svg"
import { TransactionContext } from '../../TransactionContext';

import { Container } from "./style";



export function Summary(){

    const {transaction}= useContext(TransactionContext);

 

    return(
        <Container>
    
            <div className="">
                <header>
                    
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas"/>

                </header>

                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas"/>

                </header>

                <strong>-R$ 500,00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    
                    <p>Entradas</p>
                    <img src={totalImg} alt="total"/>

                </header>

                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}