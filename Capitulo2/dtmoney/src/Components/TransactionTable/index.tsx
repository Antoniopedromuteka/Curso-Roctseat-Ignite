import { Container } from "./style";

import { useEffect } from "react";
import { api } from "../../services/api";



export function TransactionTable(){

    useEffect(()=>{

        api.get('/transactions')
        .then(response => console.log(response.data))
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