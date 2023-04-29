import { Box, Grid, GridItem, Text, Heading, Image, HStack, VStack } from "@chakra-ui/react"
import catsApi from "../api/cats"
import { useRouter } from "next/router"

export default function CatPage({cat}) {
    const router = useRouter()
    if(router.isFallback) {
        return <h3>読み込み中....</h3>
    }
    return (
        <Box
        w="100%"
        m="150px auto"
        >

            <Grid
            m="0 auto"
            w="70%"
            p={20}
            bgColor="#CED5E4"
            gridTemplateColumns="500px 300px"
            gridTemplateRows="100px 500px 200px"
            justifyContent="center"
            gap={2}>

                <GridItem
                rowSpan={1}
                colSpan={2}>

                    <HStack
                    h="100%"
                    alignItems="center">

                        <Heading
                        size="2xl"
                        pr={5}>
                            {cat.name}
                        </Heading>

                        <VStack
                        alignItems="flex-start"
                        fontSize="xl">
                            <Text
                            lineHeight="1rem">
                                {cat.birth}
                            </Text>
                            <Text
                            lineHeight="1rem">
                                {cat.gender}
                            </Text>
                        </VStack>

                    </HStack>

                </GridItem>

                <GridItem
                rowSpan={1}
                colSpan={1}>
                    <Image
                    w="100%"
                    h="100%"
                    src={cat.imagePath}
                    objectFit="cover"/>
                </GridItem>

                <GridItem
                p="0 15%"
                rowSpan={1}
                colSpan={1}>
                    <Heading
                    mb={5}
                    size="md"
                    borderBottom="1px solid #391400">
                        character
                    </Heading>
                    <Text
                    fontSize="20px">
                        {cat.character}
                    </Text>
                </GridItem>

                <GridItem
                bg="red"
                rowSpan={1}
                colSpan={2}>

                </GridItem>

            </Grid>

        </Box>
    )
}

export async function getStaticPaths() {
    const result = await catsApi.getAll()

    if(!result) return

    const paths = result.map((res) => ({ params: {cat: `${res.id}`} }))

    return {
        paths, fallback: true
    }
}

export async function getStaticProps({ params }) {
    const catData = await catsApi.getAll(params.cat)
    console.log(catData)
    return {
        props: {
            cat: catData
        }
    }
}