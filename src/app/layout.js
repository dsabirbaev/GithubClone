import { Inter } from 'next/font/google'
import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

import Category from "../components/Category";

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
        <main>
          <Category/>
         <div className='flex gap-x-[26px]  pt-[42px] container mx-auto px-5'> 
          <Aside/>
          <section className='flex flex-col  w-full border border-[#343942] rounded-[6px] px-[25px] py-[28px]'> 
              {children}
          </section>
         </div>
          
        </main>
        
        <Footer/>
      </body>
    </html>
  )
}
