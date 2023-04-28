import MainContent from "../mainContent"
import CatsList from "./catsList"

export default function CatsArea() {
    return(
        <MainContent headingText={{sm:"CATS",lg:"猫スタッフ紹介"}} buttonText={"猫スタッフ一覧"} bgColor={"#CED5E4"} path={"/cats/"}>
            <CatsList/>
        </MainContent>
    )
}