import { Box, HStack, Heading, Text, VStack, Image } from "@chakra-ui/react"
import blogApi from "../api/blog"

export default function BlogPage({blog}) {
    return (
        <Box
        w="100%">
            <Box
            w="600px"
            m="150px auto">

                <HStack
                w="600px"
                borderBottom="1px solid #391400"
                mb="50px">
                    <Heading
                    size="xl"
                    pr={5}>
                        {blog.title}
                    </Heading>
                    <Text
                    alignSelf="end">
                    {blog.date}
                    </Text>
                </HStack>

                <VStack>
                    <Image
                    src={blog.imagePath}
                    w="500px"
                    h="500px"
                    mb="50px"/>

                    <Text
                    fontSize="lg"
                    alignSelf="flex-start">
                    {blog.content}
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}

export async function getStaticPaths() {
    const result = await blogApi.getAll()

    if(!result) return

    const paths = result.map((res) => ({ params: {blog: `${res.id}`} }))

    return {
        paths, fallback: true
    }
}

export async function getStaticProps({ params }) {
    const blogData = await blogApi.getAll(params.blog)
    console.log(blogData)
    return {
        props: {
            blog: blogData
        }
    }
}