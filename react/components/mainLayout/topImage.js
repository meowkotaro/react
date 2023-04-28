import { Box, Heading,Text } from "@chakra-ui/react"

export default function TopImage() {
    return (
        <Box
        position="relative"
        top="0"
        left="0"
        height={880}
        bgImage="url(/image/header-bg-img.jpg)"
        bgRepeat="no-repeat"
        bgSize="cover"
        >
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