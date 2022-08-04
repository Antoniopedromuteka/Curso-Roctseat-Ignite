import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Flex, Input, Button, Stack, FormLabel, FormControl} from "@chakra-ui/react";
 

const Home: NextPage = () => {
  return (
   <Flex 
        w="100vw"
        h="100vh"
        align={"center"}
        justify={"center"}
    >
      
      <Flex
        as={"form"}
        w={"100%"}
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
      <Stack spacing={4}>


      <FormControl>
        <FormLabel htmlFor='email'>Email</FormLabel>

      <Input
          name='email'
          type="email"
          id='email'
          focusBorderColor='pink.500'
          bgColor={"900"}
          variant="filled"
          _hover={{
            bgColor:"gray.900" 
          }}
          size={"lg"}
          
       />
       </FormControl>


       <FormControl>   
      <FormLabel htmlFor='password'>Senha</FormLabel>
      <Input
          name='password'
          type="password"
          id='password'
          focusBorderColor='pink.500'
          bgColor={"900"}
          variant="filled"
          _hover={{
              bgColor:"gray.900" 
          }}
          size={"lg"}
       />

       </FormControl>
       </Stack>
       

      

        <Button
          type="submit"
          mt={6}
          colorScheme={"pink"}
          size={"lg"}
        >
          Entrar
        </Button>

      </Flex>

   </Flex>
  )
}

export default Home
