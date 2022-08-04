
import {Flex, Text, Input, Icon} from "@chakra-ui/react"
 
import {RiSearchLine} from "react-icons/ri";

export function Header(){
    return(
      <Flex
          as="header"
          w="100%"
          maxWidth={1400}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align={"center"}  
      >
      <Text
       fontSize="3xl"
       fontWeight={"bold"}
       letterSpacing="tight"
       w="64"
      >
        dashgo

        <Text color="pink.500" as="span" ml={1}>.</Text>
      </Text>  


      <Flex
       as="label"
       flex="1"
       py="4"
       px="8"
       ml="6"
       maxWidth={400}
       alignSelf="center"
       color="gray.200"
       position={"relative"}
       bgColor="gray.800"
       borderRadius={"full"}
      >
        <Input
          color="gray.50"
          variant={"unstyled"}
          px="4"
          mr="4"
          placeholder="buscar na plataforma"
          _placeholder={{color: "gray.400"}}
        />

        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>
      </Flex>
    );
}