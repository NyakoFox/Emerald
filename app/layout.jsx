import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import ParticleBackground from '@/components/ParticleBackground';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nyako',
  description: 'Nyako\'s developer website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticleBackground>
        <NavBar/>
        <main>
          {children}
        </main>
        </ParticleBackground>
      </body>
    </html>
  )
}
