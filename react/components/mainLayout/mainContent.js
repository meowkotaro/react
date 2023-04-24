import { Box,HStack,Heading,Button,VStack } from "@chakra-ui/react"
import Link from "next/link"

export default function MainContent({ children,headingText,buttonText,bgColor }) {
    return(
    <Box
    id="cats"
    w="100%"
    h="1000px"
    bgColor={bgColor}>
        <HStack
        m="0 auto"
        w="70%"
        pt={20}
        justifyContent="space-between">
            <VStack
            alignItems="flex-start">
                <Heading
                size="md"
                color="#EF6D58"
                fontWeight="normal">
                    {headingText.sm}
                </Heading>
                <Heading
                size="lg">
                    {headingText.lg}
                </Heading>
            </VStack>
            <Link href="/">
                <Button
                variant="outline"
                colorScheme="#391400"
                color="#391400">
                {buttonText}
                </Button>
            </Link>
        </HStack>
        {children}
    </Box>
    )
}