import { HStack,Heading,Image } from "@chakra-ui/react";

export default function Logo() {
    return(
        <HStack>
            <Image src="/header-icon.svg"></Image>
            <Heading display="inline-block" color="white">ねこかふぇ</Heading>
        </HStack>
    )
}