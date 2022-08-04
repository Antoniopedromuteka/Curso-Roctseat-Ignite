import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"


interface InputProps extends ChakraInputProps{
    name: string,
    label?: string
}

export function Input({name, label, type, ...rest} : InputProps){
    return (
      <FormControl>
      
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
          name={name}
          type={type}
          id={name}
          focusBorderColor='pink.500'
          bgColor={"900"}
          variant="filled"
          _hover={{
            bgColor:"gray.900" 
          }}
          size={"lg"}
          {...rest}
          
       />
       </FormControl>


  
    );
}