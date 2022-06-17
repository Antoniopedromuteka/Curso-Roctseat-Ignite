
import { createContext, ReactNode } from "react";
import { api } from "../services/api";

import { useEffect, useState, useContext} from "react";
 
interface transactionProps{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    creatAt: string;
}

/*interface TransactionInput{
    title: string;
    amount: number;
    type: string;
    category: string;
    creatAt: string;
}
*/

type TransactionInput = Omit<transactionProps, 'id' | 'creatAt'>

//type TransactionInput = Pick<transactionProps, 'title' | 'amount' | 'type' | 'category'>

interface TransactionProviderProps{
    children: ReactNode;
}

interface TransactionContextData{
    transaction : transactionProps[];
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);


export function TransactionProvider({children}: TransactionProviderProps){

    const [transaction, setTransaction] = useState<transactionProps[]>([])
    useEffect(()=>{

        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, [])


    async function createTransaction(transactionInput:TransactionInput){
        
      const response = await api.post('/transactions',
      {
         ...transactionInput,
         creatAt: new Date(),
       })
      
      const {transactions} = response.data;

      setTransaction([...transaction, transactions]);
    }


    return(

    <TransactionContext.Provider value={{transaction, createTransaction}}>

        {children}

    </TransactionContext.Provider>
    )
} 



export function useTrasactions(){
    const context = useContext(TransactionContext)

    return context;
}


