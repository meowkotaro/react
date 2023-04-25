import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import MainContent from "./mainContent";
import CatsList from "./catsList";
import BlogList from "./blogList";
import About from "./about";
import TextContents from "./textContents";

export default function MainLayout() {
    return(
        <Box>
            <About/>
            <MainContent headingText={{sm:"CATS",lg:"猫スタッフ紹介"}} buttonText={"猫スタッフ一覧"} bgColor={"#CED5E4"}>
                <CatsList/>
            </MainContent>
            <MainContent headingText={{sm:"BLOG",lg:"ブログ"}} buttonText={"もっと見る"} bgColor={"#FDF0E9"}>
                <BlogList/>
            </MainContent>
            <TextContents headingText={
                {sm:"Prices",lg:"ご利用料金について"}} 
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
                        src="/image/price-image.jpg"/>
                    </Box>
                </Box>
            </TextContents>
            <TextContents headingText={
                {sm:"ADOPT",lg:"譲渡について"}} 
                bgcolor={"#FED8D8"}
                flexDirection="row-reverse">

                </TextContents>
        </Box>
    )
}