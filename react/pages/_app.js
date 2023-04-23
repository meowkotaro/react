import { NavMenuProvider } from '@/context/navMenuProvider'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavMenuProvider>
        <Component {...pageProps} />
      </NavMenuProvider>
    </ChakraProvider>
  )
}
