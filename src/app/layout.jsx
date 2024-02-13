import { Abel } from 'next/font/google'
import { Slabo_27px } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'




const inter = Abel({ subsets: ['latin'], weight: ['400'] })
const interB = Slabo_27px({ subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'iFec Online Store',
  description: 'Your online store for Iphones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Navbar />
            {children}
            
            <Footer />
      </body>
    </html>
  )
}
