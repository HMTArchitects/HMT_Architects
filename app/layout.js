import './globals.css'
import { Ubuntu } from 'next/font/google'
import {Navbar} from "../components"
import { Metadata } from 'next'
const font = Ubuntu({ weight: ["300", "400", "500", "700"], subsets:['latin'] })


export const metadata = {
  title: 'HMT Architects | Best Architects in Chennai',
  description: 'Best Architects in Chennai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="canonical" href="https://hmtarchitects.com/" />
      </head>
      <body> 
        <Navbar/>
        <main className={font.className} >
        

        {children}
          
        </main>
      </body>
    </html>
  )
}
