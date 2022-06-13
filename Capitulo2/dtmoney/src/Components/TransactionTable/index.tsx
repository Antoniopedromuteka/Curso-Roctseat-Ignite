import { Container } from "./style";

import { useEffect } from "react";



export function TransactionTable(){

    useEffect(()=>{

        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))

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
                    <tr>

                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>

                        <td>Desenvolvimento de Website</td>
                        <td className="withraw">-R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>


                    </tr>
                </tbody>
            </table>
        </Container>
    );
}