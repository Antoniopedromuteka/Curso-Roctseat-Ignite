 

import {GetServerSideProps}  from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../Components/SubscribeButton/index';
import { stripe } from '../services/stripe';


import styles from './home.module.scss';

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}


export default function Home({product} : HomeProps) {

 

  return (

    <>
       <Head>
        <title>HOME | Ignews</title>
      </Head>


      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span>world.</h1>

          <p>
            Get acess to all the publications <br/>
            <span>for ${product.amount} month</span>
          </p>

          <SubscribeButton/>

        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
     </> 
  )
}

export const getServerSideProps : GetServerSideProps = async() =>{

  const price = await stripe.prices.retrieve("price_1LLosxC1xRf0r2qDVCwRKrq6", {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return{
    props:{
      product,
    }
  }
}
