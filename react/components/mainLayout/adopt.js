import { Box, Flex, Image } from "@chakra-ui/react"
import TextContents from "./textContents"

export default function Adopt() {
    const adoptText = {
        sm:"ADOPT",
        lg:"譲渡について",
        text:"保護猫カフェ285にいる猫を家族として受け入れたいとお考えの方は、まずはご来店いただき、スタッフまでご相談ください。",
    }

    const imageURL = [
        {image: "/image/adopt-image1.jpg"},
        {image: "/image/adopt-image2.jpg"},
    ]

    return (
        <TextContents
        text={adoptText.text}
        headingText={{sm:adoptText.sm,lg:adoptText.lg}} 
        bgcolor={"#FED8D8"}
        flexDirection="row-reverse">
            <Flex
            p={20}
            w="100%"
            h="500px"
            alignItems="center"
            justifyContent="center">
                {imageURL.map((URL,i)=> {
                    return(
                    <Box
                    key={i}
                    overflow="hidden"
                    w="240px"
                    h="240px">
                        <Image
                        src={URL.image}/>
                    </Box>
                    )
                })}

            </Flex>
        </TextContents>
    )
}