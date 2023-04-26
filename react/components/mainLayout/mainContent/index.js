import { Box,HStack,Heading,Button,VStack } from "@chakra-ui/react"
import Link from "next/link"
import HeadLayout from "../../item/headLayout"


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
            <HeadLayout headingText={headingText}/>
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