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
        position="relative"
        height={880}
        bgImage="url(/image/header-bg-img.jpg)"
        bgRepeat="no-repeat"
        bgSize="cover"
        >
            <HStack maxW={1040} mx="auto" alignItems="center"  pt="20px">
                <Logo/>
                <Spacer/>
                <HeaderMenu/>
            </HStack>

            <Box position="absolute" top="50%" left="20%">
                <Heading
                textAlign="center"
                color="white"
                size="4xl"
                textShadow="0px 0px 6px black">
                ねこと一息。
                </Heading>
                <Text
                w="360px"
                p={4}
                color="white"
                fontSize="20px"
                textShadow="0px 0px 6px black">
                ねこかふぇはゆっくりとした時間をねこで癒されながら過ごせます
                </Text>
            </Box>
        </Box>
    )
}