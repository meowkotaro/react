import { Box, Flex, HStack, Heading, Text, Image, Center } from "@chakra-ui/react";
import Link from "next/link";
import blogApi from "../api/blog";

export default function BlogListPage({blogs}) {
    return (
        <Box
        w="100%">
            <Box
            w="80%"
            m="150px auto">

                <HStack
                borderBottom="1px solid #391400"
                mb="50px">
                    <Heading
                    size="xl"
                    pr={5}>
                        BLOG
                    </Heading>
                    <Text
                    alignSelf="end">
                    最新情報や猫たちの日常を書いてます。
                    </Text>
                </HStack>

                <Flex
                w="100%"
                justifyContent="space-around"
                wrap="wrap"
                rowGap={20}>
                    {blogs.map((blog)=> {
                        return(
                            <Link
                            key={blog.id}
                            href={`/blog/${blog.id}/`}>
                                <Box
                                w="500px"
                                h="650px"
                                p={10}
                                border="1px solid #391400"
                                borderRadius="10px">
                                    <Image
                                    w="400px"
                                    h="400px"
                                    m="0 auto"
                                    src={blog.imagePath}
                                    objectFit="cover"/>

                                    <Heading
                                    mt="20px"
                                    size="lg">
                                    {blog.title}
                                    </Heading>
                                    <Text
                                    fontSize="lg">
                                    {blog.date}
                                    </Text>
                                    <Text
                                    fontSize="lg"
                                    w="90%"
                                    h="3em"
                                    m="20px 0"
                                    overflow="hidden">
                                        {blog.content}
                                    </Text>
                                </Box>
                            </Link> 
                        )
                    })}

                </Flex>
            </Box>
        </Box>
    )
}

export async function getStaticProps() {
    const blogData = await blogApi.getAll()
    console.log(blogData)
    return {
        props: {
            blogs: blogData
        }
    }
}