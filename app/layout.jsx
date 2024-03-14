import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nyako',
  description: 'Nyako\'s developer website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
