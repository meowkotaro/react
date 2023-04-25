import { useState,useEffect } from "react";
import { HStack } from "@chakra-ui/react";
import Blog from "./blog";

export default function BlogList() {

    // const [ blogData,setBlogData ] = useState([])
    // useEffect(()=>{
    // })

    return (
        <HStack
        w="70%"
        m="0 auto"
        mt={20}
        justifyContent="space-around">
            <Blog/>
            <Blog/>
            <Blog/>
        </HStack>
    )
}