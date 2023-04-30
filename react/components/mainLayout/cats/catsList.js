import { HStack } from "@chakra-ui/react"
import Cat from "./cat"
import { useState,useEffect } from "react"
import catsApi from "@/db/cats"

export default function CatsList() {

    const [ catsData,setCatsData ] = useState([])
    useEffect(()=>{
        catsApi.getAll().then((result) => {
            setCatsData(result)
        })
    },[])

    return (
        <HStack
        w="100%"
        mt={20}
        wrap="nowrap">
            {catsData.filter((cat,i)=> {
                return i <= 2
            }).map((cat)=> {
                return <Cat key={cat.id} name={cat.name} breed={cat.breed} imagePath={cat.imagePath}/>
            })}
        </HStack>
    )
}