import { Box, Heading, List, ListItem, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useNavMenu, useNavMenuDispatch } from "@/context/navMenuProvider";

export default function FooterLayout() {
    const menu = useNavMenu();
    const footerMenu = menu(false)
    
    return(
       <footer>
        <Box
        w="100%"
        h="450px"
        bgColor="#AACDCD">
            <VStack
            h="320px"
            p={10}>
                <Heading
                size="md"
                color="#EF6D58"
                fontWeight="normal"
                pb={5}>
                    Menu
                </Heading>
                <List
                color="white"
                lineHeight="8">
                    {footerMenu.map(({text,link},i) => {
                       return (
                           <ListItem key={i}>
                            <Link href={link}>{text}</Link>
                            </ListItem>
                       )
                    })}
                </List>
            </VStack>
            <Box
            m="0 auto"
            w="80%"
            borderBottom="1px solid #3A3C56"/>
            <Box
            position="relative"
            h="129px">
                <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%,-50%)">
                    <small>Copyright @copy; 2022 catcafe All Rights Reserved.</small>
                </Text>
                <Text
                position="absolute"
                top="50%"
                right="15%"
                transform="translate(-50%,-50%)">
                    Terms of Use
                </Text>
                <Text
                position="absolute"
                top="50%"
                right="10%"
                transform="translateY(-50%)">
                    Privacy Policy
                </Text>
            </Box>
        </Box>
       </footer> 
    )
}