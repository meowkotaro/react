import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import catsApi from "../api/cats"
import CatList from "@/components/catsPage/catList";

export default function CatsPage({cats}) {
    return (
        <Box
        id="Main-container"
        w="100%">

            <Box
            w="900px"
            m="150px auto"
            p="50px 100px 100px"
            bgColor="#CED5E4"
            borderRadius="20px">

                <Box>
                    <Heading
                    textAlign="center">
                    個性的なかわいい猫スタッフの紹介
                    </Heading>
                    <Text
                    textAlign="center">
                    かならず気の合うお気に入りの猫が見つかります
                    </Text>
                </Box>
                
                {cats.map((cat)=> {
                    return (
                        <CatList
                        id={cat.id}
                        name={cat.name}
                        birth={cat.birth}
                        imagePath={cat.imagePath}
                        genderIcon={cat.genderIcon}
                        character={cat.character}/>
                    )
                })}
            </Box>
        </Box>
    )
}

export async function getStaticProps() {
    const catsData = await catsApi.getAll()
    console.log(catsData)
    return {
        props: {
            cats: catsData
        }
    }
}