import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import About from "./about";
import Adopt from "./adopt";
import Prices from "./prices";
import CatsArea from "./cats";
import BlogArea from "./blog";
import TopImage from "./topImage";

export default function MainLayout() {
    return(
        <Box>
            <TopImage/>
            <About/>
            <CatsArea/>
            <BlogArea/>
            <Prices/>
            <Adopt/>
        </Box>
    )
}