import { Box, HStack, Heading, Text, VStack, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"
import blogApi from "@/db/blog"
// import axios from "axios"

// const ENDPOINT_URL = `${process.env.NEXT_PUBLIC_JSOU_SERVER}/blog`


export default function BlogPage({blog}) {
    console.log(blog)

    const router = useRouter()
    if(router.isFallback) {
        return <h3>読み込み中....</h3>
    }
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
                    alt={blog.title}
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
    
    // const result = await axios.get(ENDPOINT_URL).then((res)=> res.data)
    const result = await blogApi.getAll()
    if(!result) return
    const paths = result.map((res) => ({ params: {blog: `${res.id}`} }))

    return {
        paths, fallback: true
    }
}

export async function getStaticProps({ params }) {
    
    // const result = await axios.get(`${ENDPOINT_URL}/${params.blog}`).then(res => res.data)
    const result = await blogApi.getAll( params.blog )

    // console.log("getStaticProps")
    // console.log(result)
    return {
        props: {
            blog: result
        }
    }
}