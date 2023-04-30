import { useState,useEffect } from "react";
import { HStack } from "@chakra-ui/react";
import Blog from "./blog";
import blogApi from "@/db/blog";

export default function BlogList() {

    const [ blogData,setBlogData ] = useState([])
    useEffect(()=>{
        blogApi.getAll().then((result) => {
            setBlogData(result)
        })
    },[])

    return (
        <HStack
        w="70%"
        m="0 auto"
        mt={20}
        justifyContent="space-around">
            {blogData.filter((blog,i) => {
                return i <= 2
            }).map((blog) => {
                return (
                    <Blog
                    key={blog.id}
                    title={blog.title}
                    date={blog.date}
                    content={blog.content}
                    imagePath={blog.imagePath}/>
                )
            })}
        </HStack>
    )
}