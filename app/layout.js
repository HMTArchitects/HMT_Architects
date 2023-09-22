import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "../components"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HMT Architects - Best Architects in Chennai',
  description: 'Best Architects in Chennai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body> 
        <Navbar/>
        <main className={inter.className} >
        

        {children}
          
        </main>
      </body>
    </html>
  )
}
