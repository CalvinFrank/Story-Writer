import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import {AppWrapper} from "./context";
import Footer from './footer';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: 'Story Writer',
    description: 'Generated by create next app',
  }
  
  export default function RootLayout(  {children} ) {
  return (
    <AppWrapper>
      <html lang="en">
        <link rel="icon" href="/favicon.png" sizes="7x5" />
        <body className={inter.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </AppWrapper>
  )
}
