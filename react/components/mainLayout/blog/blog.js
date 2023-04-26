import { Box, VStack, Image, Heading, Text } from "@chakra-ui/react"

export default function Blog() {
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
                    src="/image/blog-image1.jpg"/>
                    <Box
                    p={5}>
                        <Heading
                        size="md">
                        タイトルテキスト
                        </Heading>
                        <Text>2023-04-25</Text>
                        <Text
                        pt={2}>
                        ここにブログの内容が入ります。ブログにはイベントやキャンペーンのお知らせを書きます。
                        </Text>
                    </Box>
                </VStack>
            </Box>
    )
}