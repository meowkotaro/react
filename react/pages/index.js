import { Inter } from 'next/font/google'
import HeaderLayout from "../components/headerLayout"
import FooterLayout from '@/components/footerLayout'
import { NavMenuProvider } from '@/context/navMenuProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <NavMenuProvider>
      <HeaderLayout/>
      <FooterLayout/>
    </NavMenuProvider>
  )
}
