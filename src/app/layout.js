import './globals.css'
import { Inter } from 'next/font/google'
// import default_pic from "./default.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.png" sizes="7x5" /> */}
      <body className={inter.className}>
        {/* <header className="header">
          <img src={default_pic} />
        </header> */}
        {children}
      </body>
    </html>
  )
}
