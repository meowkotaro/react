import { 
    UnorderedList,
    ListItem,
    Button,
    HStack
 } from "@chakra-ui/react"
 import { useNavMenu } from "@/context/navMenuProvider"
import Link from "next/link";

export default function HeaderMenu() {
    const menus = useNavMenu();
    const headerMenu = menus(true)
    

    return(
        <HStack gap="40px">
            <UnorderedList
            color="white"
            fontSize="20px"
            ml={0}
            display="flex"
            listStyleType="none"
            flexDirection={{base: "column",md: "row"}}
            gap={{base:"20px",md:"40px"}}>
                {headerMenu.map(({text,link}) => {
                    return(
                        <ListItem key={text} display="block">
                            <Link href={link}>{text}</Link>
                        </ListItem>
                    )
                })}
            </UnorderedList>
            <Button
            ml="40px"
            color="white"
            size="md"
            variant="outline">
            CONTACT
            </Button>
        </HStack>
    )
}