
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const logo = 'https://live.staticflickr.com/65535/53424147193_14fbb72875_w.jpg'
//components

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo} sizes="any" />
      </head>
      <body className={inter.className}>
        
        {children}
        <script
      src="https://kit.fontawesome.com/c8eb323ddc.js"
    ></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

        </body>
      
    </html>
  )
}
