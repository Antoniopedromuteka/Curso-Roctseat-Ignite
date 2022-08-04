
import {Flex, Text, Input, Icon, HStack, Box, Avatar} from "@chakra-ui/react"
 
import {RiNotificationLine, RiNotificationOffLine, RiSearchLine, RiUserAddLine} from "react-icons/ri";

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

      <Flex
        align={"center"}
        ml="auto"
      >
        <HStack 
           spacing={8}
           mx="8"
           pr="8"
           py="1"
           color="gray.300"
           borderRightWidth={1}
           borderColor="gray.700"
        >
        <Icon as={RiNotificationLine} fontSize="20"/>
        <Icon as={RiUserAddLine} fontSize="20"/>
        </HStack>

        <Flex
           align={"center"}
        >

        <Box mr="4" textAlign={"right"}>
            <Text>Antonio Muteka</Text>
            <Text color="gray.300" fontSize="small">antoniomuteka2004@gmail.com</Text>
        </Box>

        <Avatar size={"md"} name="Antonio Muteka" src="http://github.com/antoniopedromuteka.png" />

        </Flex>

      </Flex>
      </Flex>
    );
}