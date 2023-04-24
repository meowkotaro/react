import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

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
                        ABOUT
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
            <Box
            id="cats"
            w="100%"
            h="1000px"
            bgColor="#CED5E4">
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
                            CATS
                        </Heading>
                        <Heading
                        size="lg">
                            猫スタッフ紹介
                        </Heading>
                    </VStack>
                    <Link href="/">
                        <Button
                        variant="outline"
                        colorScheme="#391400"
                        color="#391400">
                        猫スタッフ一覧
                        </Button>
                    </Link>
                </HStack>

                <HStack
                w="100%"
                mt={20}
                wrap="nowrap">
                    <Box
                    display="flex"
                    alignItems="center"
                    m="0 !important"
                    w="34%"
                    h="600px"
                    border="1px solid #391400">
                        <Box
                        position="relative"
                        overflow="hidden"
                        m="0 auto"
                        w="95%"
                        h="95%"
                        >
                            <Image src="/cat-img0.jpg" alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            zIndex="0"
                            />
                            <Box
                            position="absolute"
                            bgColor="blackAlpha.400"
                            w="100%"
                            h="100%"
                            top="0"
                            left="0"
                            zIndex="1">
                            </Box>
                            <Box
                            position="absolute"
                            bottom="10%"
                            left="10%"
                            zIndex="2">
                                <Text
                                bgColor="white"
                                borderRadius="full"
                                textAlign="center">メインクーン</Text>
                                <Heading
                                color="white">ファボリ</Heading>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                    display="flex"
                    alignItems="center"
                    m="0 !important"
                    w="34%"
                    h="600px"
                    border="1px solid #391400">
                        <Box
                        position="relative"
                        overflow="hidden"
                        m="0 auto"
                        w="95%"
                        h="95%"
                        >
                            <Image src="/cat-img0.jpg" alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            zIndex="0"
                            />
                            <Box
                            position="absolute"
                            bgColor="blackAlpha.400"
                            w="100%"
                            h="100%"
                            top="0"
                            left="0"
                            zIndex="1">
                            </Box>
                            <Box
                            position="absolute"
                            bottom="10%"
                            left="10%"
                            zIndex="2">
                                <Text
                                bgColor="white"
                                borderRadius="full"
                                textAlign="center">メインクーン</Text>
                                <Heading
                                color="white">ファボリ</Heading>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                    display="flex"
                    alignItems="center"
                    m="0 !important"
                    w="34%"
                    h="600px"
                    border="1px solid #391400">
                        <Box
                        position="relative"
                        overflow="hidden"
                        m="0 auto"
                        w="95%"
                        h="95%"
                        >
                            <Image src="/cat-img0.jpg" alt=""
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            zIndex="0"
                            />
                            <Box
                            position="absolute"
                            bgColor="blackAlpha.400"
                            w="100%"
                            h="100%"
                            top="0"
                            left="0"
                            zIndex="1">
                            </Box>
                            <Box
                            position="absolute"
                            bottom="10%"
                            left="10%"
                            zIndex="2">
                                <Text
                                bgColor="white"
                                borderRadius="full"
                                textAlign="center">メインクーン</Text>
                                <Heading
                                color="white">ファボリ</Heading>
                            </Box>
                        </Box>
                    </Box>
                </HStack>

            </Box>
        </Box>
    )
}