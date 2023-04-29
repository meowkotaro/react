import { HStack,Heading,Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
    return(
        <Link
        href="/">
            <HStack>
                <Image src="/header-icon.svg"></Image>
                <Heading display="inline-block" color="white">ねこかふぇ</Heading>
            </HStack>
        </Link>
    )
}