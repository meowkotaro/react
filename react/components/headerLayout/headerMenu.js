import { 
    UnorderedList,
    ListItem,
    Button,
    HStack
 } from "@chakra-ui/react"

export default function HeaderMenu() {
    const headerList = ["About","Cats","Price","Blog","Adopt"]

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
                {headerList.map(list => {
                    return(
                        <ListItem key={list} display="block">{list}</ListItem>
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