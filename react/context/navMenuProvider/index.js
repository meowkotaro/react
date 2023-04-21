import { useContext,createContext,useReducer } from "react"; 

const navMenuContext = createContext();

const reducer = () => {
    
}

const NavMenuProvider = ({children}) => {
    const menus = [
        {
            title: "ねこかふぇについて",
            link: "/"
        },
        {
            title: "ねこスタッフ紹介",
            link: "/"
        },
        {
            title: "ブログ",
            link: "/"
        },
        {
            title: "ご利用料金",
            link: "/"
        },
        {
            title: "譲渡について",
            link: "/"
        },
    ]

    const [menu,dispatch] = useReducer(reducer,menus)

    return  (
        <navMenuContext.Provider value={menus}>
            {children}
        </navMenuContext.Provider>
    )
}

const useNavMenu = () => useContext(navMenuContext)

export { NavMenuProvider,useNavMenu }