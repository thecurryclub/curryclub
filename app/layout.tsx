import type { Metadata } from 'next'
import './globals.css'
import CalModalProvider from '@/components/CalModalProvider'
import DemoClickCatcher from '@/components/DemoClickCatcher'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Curry Club',
  description: 'Chef-less curries for venues. Consistent, fast, and delicious.',
  metadataBase: new URL('https://thecurry.club'),
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CalModalProvider calUrl="https://cal.com/curryclub/30min">
          <DemoClickCatcher />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CalModalProvider>
      </body>
    </html>
  )
}
