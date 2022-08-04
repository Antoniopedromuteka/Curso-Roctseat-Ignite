
import Document, { Html, Head, Main, NextScript } from "next/document";
 

export default class MyDocument extends Document {

    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
              </Head>
               <body>
                <Main/>
                <NextScript/>
               </body> 
            </Html>
        ); 
    }

}