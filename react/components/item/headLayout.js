import { VStack,Heading } from "@chakra-ui/react"

export default function HeadLayout({headingText}) {
    return (
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
    )
}