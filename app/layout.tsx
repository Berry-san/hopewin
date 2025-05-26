import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hopewin',
  description: 'Empowering Women,Uplifting Communities',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-satoshi antialiased`}>
        <div className="w-full flex flex-col flex-grow">
          <Header />
          <div className="flex-grow flex flex-col mt-16 lg:mt-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
