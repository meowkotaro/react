import { 
    Box,
    Heading,
    Image,
    Spacer,
    HStack,
    Text,
} from "@chakra-ui/react"
import HeaderMenu from "./headerMenu"
import Logo from "./logo"

export default function headerLayout() {
    return(
        <Box
        position="fixed"
        w="80%"
        h="100px"
        bgColor="blackAlpha.300"
        zIndex="10"
        top="0"
        left="50%"
        transform="translateX(-50%)">
            <HStack maxW={1040} mx="auto" alignItems="center"  pt="20px">
                <Logo/>
                <Spacer/>
                <HeaderMenu/>
            </HStack>
        </Box>
    )
}