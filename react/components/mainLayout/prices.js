import TextContents from "./textContents"
import { Box,Image } from "@chakra-ui/react"

export default function Prices() {
    
    const priceText = {
        text:"ねこかふぇのご利用料金は、時間制となっております。またワンドリンクオーダー制となっているため、併設のカフェの本格的なコーヒーや紅茶を味わいながら、猫たちとゆったり癒しの時間をお寛ぎください。",
        
    }

    return (
        <TextContents 
        text={priceText.text}
        headingText={{sm:"PRICES",lg:"ご利用料金について"}} 
        bgcolor={"#CED5E4"}
        flexDirection="row">
            <Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            w="100%"
            h="100%">
                <Box
                overflow="hidden"
                right="0"
                w="90%"
                h="400px"
                borderRadius="200px 0 0 200px">
                    <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src="/image/price-image.jpg"
                    alt="PRICES"/>
                </Box>
            </Box>
        </TextContents>
    )
}