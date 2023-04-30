import { Box, Heading, Text, Image } from "@chakra-ui/react"

export default function Cat({ name,breed,imagePath }) {
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
                    <Image src={imagePath} 
                    alt={name}
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
                        textAlign="center">{breed}</Text>
                        <Heading
                        color="white">{name}</Heading>
                    </Box>
                </Box>
            </Box>
    )
}