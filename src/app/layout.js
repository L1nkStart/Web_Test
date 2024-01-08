import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Providers from './providers/providers.jsx'
// import { AnimatePresence } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto',
  description: 'Proyecto2023  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Script id="theme-detector">{`
          const theme = document.documentElement.style.colorScheme
          document.documentElement.classList.add(theme)
        `}</Script>
        <Providers>
        <Navbar />
        <Head />
          {children}
        <Footer />
        </Providers>
      </body>      
    </html>
  )
}
