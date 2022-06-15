import { Container } from "./style";

import { useEffect, useState } from "react";
import { api } from "../../services/api";


interface transactionProps{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    creatAt: string;
}

export function TransactionTable(){

    const [transaction, setTransaction] = useState<transactionProps[]>([])
    useEffect(()=>{

        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titutlo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>

                    </tr>
                </thead>

                <tbody>

                    {transaction.map(transaction =>(
                    
                    <tr key={transaction.id}>

                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.creatAt}</td>
                    </tr>
                    ))} 
                        
                </tbody>
            </table>
        </Container>
    );
}