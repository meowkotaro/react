import { Box, VStack, Image, Heading, Text } from "@chakra-ui/react"

export default function Blog({ title, date, content, imagePath }) {
    return(
        <Box
            overflow="hidden"
            w="300px"
            h="500px"
            bgColor="#CED5E4"
            borderRadius="10px">
                <VStack
                alignItems="flex-start">
                    <Image
                    w="300px"
                    h="300px"
                    src={imagePath}
                    alt={title}/>
                    <Box
                    p={5}>
                        <Heading
                        size="md">
                        {title}
                        </Heading>
                        <Text>{date}</Text>
                        <Text
                        pt={2}>
                        {content}
                        </Text>
                    </Box>
                </VStack>
            </Box>
    )
}