import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function MainLayout() {
    return(
        <Box>
            <Box
            id="about-conainer"
            m="0 auto"
            w="80%"
            h="500px">
                <VStack
                h="100%"
                p={20}>
                    <Heading
                    size="md"
                    color="#EF6D58"
                    fontWeight="normal"
                    pb={5}>
                        About
                    </Heading>
                    <Heading
                    pb={5}>
                        人と猫がつながる場所
                    </Heading>
                    <Text
                    w="80%">
                        ねこかふぇは、「猫と人がつながる場所」をコンセプトに、福島県郡山市にて2018年7月にオープンしました。ここにはたくさんの個性豊かな猫たちが暮らしていて、遊びに来ていただいたお客様を、美味しいコーヒーやお飲み物でおもてなしいたします。猫たちと一緒に遊んだり、お昼寝したり、お茶を飲みながらのんびりゆったりした時間をお過ごしください。
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}