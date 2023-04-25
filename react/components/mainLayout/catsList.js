import { HStack } from "@chakra-ui/react"
import Cat from "./cat"
import { useState,useEffect } from "react"

export default function CatsList() {

    // const [ blogData,setBlogData ] = useState([])
    // useEffect(()=>{
    // })

    return (
        <HStack
        w="100%"
        mt={20}
        wrap="nowrap">
            <Cat/>
            <Cat/>
            <Cat/>
        </HStack>
    )
}