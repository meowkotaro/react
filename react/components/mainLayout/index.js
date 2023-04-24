import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import MainContent from "./mainContent";
import CatsList from "./catsList";
import BlogList from "./blogList";

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
            <MainContent headingText={{sm:"CATS",lg:"猫スタッフ紹介"}} buttonText={"猫スタッフ一覧"} bgColor={"#CED5E4"}>
                <CatsList/>
            </MainContent>
            <MainContent headingText={{sm:"BLOG",lg:"ブログ"}} buttonText={"もっと見る"} bgColor={"#FDF0E9"}>
                <BlogList/>
            </MainContent>
        </Box>
    )
}