import MainContent from "../mainContent"
import BlogList from "./blogList"

export default function BlogArea() {
    return (
        <MainContent 
        headingText={{sm:"BLOG",lg:"ブログ"}} 
        buttonText={"もっと見る"} 
        bgColor={"#FDF0E9"}
        path={"/blog/"}>
            <BlogList/>
        </MainContent>
    )
}