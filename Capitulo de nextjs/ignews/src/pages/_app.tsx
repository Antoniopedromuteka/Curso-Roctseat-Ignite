 
 import {AppProps} from 'next/app';
import { Header } from '../Components/Header/index';

 import '../styles/global.scss';

function MyApp({ Component, pageProps }:AppProps) {
  return (
      <>
      <Header/>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp
