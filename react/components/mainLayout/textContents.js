import { Box,HStack,Text,Button } from "@chakra-ui/react";
import HeadLayout from "../item/headLayout";
import Link from "next/link";

export default function TextContents({children,bgcolor,headingText,flexDirection}) {
    return (
        <Box
        w="100%"
        h="500px"
        bgColor={bgcolor}>
            <HStack
            flexDirection={flexDirection}
            justifyContent="space-between"
            w="100%">
                <Box
                w="15%"/>
                <Box
                w="35%"
                alignSelf="center">
                    <HeadLayout headingText={headingText}/>
                    <Text
                    p={10}>
                    ねこかふぇのご利用料金は、時間制となっております。またワンドリンクオーダー制となっているため、併設のカフェの本格的なコーヒーや紅茶を味わいながら、猫たちとゆったり癒しの時間をお寛ぎください。
                    </Text>
                    <Link href="/">
                        <Button
                        variant="outline"
                        colorScheme="#391400"
                        color="#391400">
                        詳しく見る
                        </Button>
                    </Link>
                </Box>
                <Box
                m="0 !important"
                w="50%"
                h="500px">
                {children}
                </Box>
            </HStack>
        </Box>
    )
}