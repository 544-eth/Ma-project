import { Roboto_Slab } from 'next/font/google'
import { Slabo_27px } from 'next/font/google'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './globals.css'

const inter = Roboto_Slab({ subsets: ['latin'], weight: ['400'] })
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
        <Main />
        {children}
        </body>
    </html>
  )
}
