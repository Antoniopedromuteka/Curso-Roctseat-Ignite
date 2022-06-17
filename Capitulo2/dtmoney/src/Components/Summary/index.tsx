
import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from "../../assets/total.svg"
import { TransactionContext } from '../../TransactionContext';

import { Container } from "./style";



export function Summary(){

    const {transaction}= useContext(TransactionContext);
/*
    const TotalDeposits = transaction.reduce((acc, transaction) =>{

        if(transaction.type === 'deposit'){
            return acc + transaction.amount;
        }


        return acc;

    }, 0)*/

    const summary = transaction.reduce((acc, transaction) =>{

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    },
    {
        deposits: 0,
        withdraw: 0,
        total: 0,
    });

    return(
        <Container>
    
            <div className="">
                <header>
                    
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas"/>

                </header>

                <strong>{new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas"/>

                </header>

                <strong>-
                {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highLight-background">
                <header>
                    
                    <p>Total</p>
                    <img src={totalImg} alt="total"/>

                </header>

                <strong>
                {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}