import { Box, Heading, Text, Image } from "@chakra-ui/react"

export default function Cat() {
    return(
        <Box
            display="flex"
            alignItems="center"
            m="0 !important"
            w="34%"
            h="600px"
            border="1px solid #391400">
                <Box
                position="relative"
                overflow="hidden"
                m="0 auto"
                w="95%"
                h="95%"
                >
                    <Image src="/image/cat-img0.jpg" alt=""
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    zIndex="0"
                    />
                    <Box
                    position="absolute"
                    bgColor="blackAlpha.400"
                    w="100%"
                    h="100%"
                    top="0"
                    left="0"
                    zIndex="1">
                    </Box>
                    <Box
                    position="absolute"
                    bottom="10%"
                    left="10%"
                    zIndex="2">
                        <Text
                        bgColor="white"
                        borderRadius="full"
                        textAlign="center">メインクーン</Text>
                        <Heading
                        color="white">ファボリ</Heading>
                    </Box>
                </Box>
            </Box>
    )
}