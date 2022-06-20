
import Document, {Html, Head, Main, NextScript} from "next/document";


export default class MyDocument extends Document {
    render() {
        return(

            <Html lang="en">

                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@700;900&display=swap" rel="stylesheet"/>
              
              
                </Head>

                <body>
                    <Main>

                    </Main>

                    <NextScript/>
                </body>

            </Html>

        )
    }
}