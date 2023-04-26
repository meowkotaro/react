import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import About from "./about";
import Adopt from "./adopt";
import Prices from "./prices";
import CatsArea from "./cats";
import BlogArea from "./blog";

export default function MainLayout() {
    return(
        <Box>
            <About/>
            <CatsArea/>
            <BlogArea/>
            <Prices/>
            <Adopt/>
        </Box>
    )
}