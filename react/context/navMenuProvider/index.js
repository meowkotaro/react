import { useContext,createContext,useReducer } from "react"; 

const navMenuContext = createContext();

const NavMenuProvider = ({children}) => {
    const menus = [
        {
            text: "ねこかふぇについて",
            link: "/"
        },
        {
            text: "ねこスタッフ紹介",
            link: "/cats"
        },
        {
            text: "ブログ",
            link: "/blog"
        },
        {
            text: "ご利用料金",
            link: "/"
        },
        {
            text: "譲渡について",
            link: "/"
        },
]

const menuText = (bool) => {
    const headerMenu = ["About","Cats","Blog","Price","Adopt"]
    const newMenus = menus
    return newMenus.map((menu,i)=> {
        return bool ? {...menu, text:headerMenu[i]} : {...menu}
    })
}

    return  (
        <navMenuContext.Provider value={menuText}>
                {children}
        </navMenuContext.Provider>
    )
}

const useNavMenu = () => useContext(navMenuContext)

export { NavMenuProvider,useNavMenu }