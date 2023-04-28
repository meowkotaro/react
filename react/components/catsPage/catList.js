import { Box,Text,Image } from "@chakra-ui/react"
import Link from "next/link"

export default function CatList({id,name,birth,imagePath,genderIcon,character}) {
 return (
    <Box
    m="50px auto">
        <Link
        href={`/cats/${id}`}>
            <Box
            w="700px"
            h="250px"
            pt="25px"
            bgColor="#FED8D8"
            display="grid"
            gridTemplateColumns="200px 400px"
            gridTemplateRows="75px 125px"
            gap="0 20px"
            justifyContent="center">
                <Box
                overflow="hidden"
                gridColumnStart="1"
                gridColumnEnd="2"
                gridRowStart="1"
                gridRowEnd="3">
                    <Image
                    src={imagePath}
                    w="100%"
                    h="100%"
                    objectFit="cover"/>
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold">
                    <Text
                    fontSize="2xl">{name}</Text>
                    <Image
                    src={genderIcon}/>
                    <Text
                    fontSize="lg">{birth}</Text>
                </Box>
                <Box
                p={5}>
                    <Text>{character}</Text>
                </Box>
            </Box>
        </Link>
    </Box>
 )
}