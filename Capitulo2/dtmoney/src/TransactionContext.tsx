
import { createContext, ReactNode } from "react";
import { api } from "./services/api";

import { useEffect, useState } from "react";


interface transactionProps{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    creatAt: string;
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionContext = createContext<transactionProps[]>([]);



export function TransactionProvider({children}: TransactionProviderProps){

    const [transaction, setTransaction] = useState<transactionProps[]>([])
    useEffect(()=>{

        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, [])


    return(

    <TransactionContext.Provider value={transaction}>

        {children}

    </TransactionContext.Provider>
    )
} 


