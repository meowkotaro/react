import { NavMenuProvider } from '@/context/navMenuProvider'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import HeaderLayout from '@/components/headerLayout'
import FooterLayout from '@/components/footerLayout'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavMenuProvider>
        <HeaderLayout/>
        <Component {...pageProps} />
        <FooterLayout/>
      </NavMenuProvider>
    </ChakraProvider>
  )
}
