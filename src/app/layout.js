import { Inter } from 'next/font/google'
import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Main from "../components/Main";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub',
  description: 'GitHub clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header/>
        <main className='flex gap-x-[26px] px-5'>
          <Aside/>
          <Main children={children}/>
          
        </main>
        
        <Footer/>
      </body>
    </html>
  )
}
