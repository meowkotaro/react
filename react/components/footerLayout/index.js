import { Box, List, ListItem, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useNavMenu } from "@/context/navMenuProvider";

export default function FooterLayout() {
    const menu = useNavMenu();
    
    return(
       <footer>
        <Box
        w="100%"
        h="450px"
        bgColor="#AACDCD">
            <VStack>
                <h3>Menu</h3>
                <List>
                    {menu.map(({title,link}) => {
                       return (
                           <ListItem>
                            <Link href={link}>{title}</Link>
                            </ListItem>
                       )
                    })}
                </List>
            </VStack>
        </Box>
       </footer> 
    )
}