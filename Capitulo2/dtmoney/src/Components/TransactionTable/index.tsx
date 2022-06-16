import { Container } from "./style";

import { useContext} from "react";
 
import { TransactionContext } from "../../TransactionContext";




export function TransactionTable(){

    const transaction = useContext(TransactionContext);

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
                            <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-br').format(new Date (transaction.creatAt))}</td>
                    </tr>
                    ))} 
                        
                </tbody>
            </table>
        </Container>
    );
}