import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CollabRx - Cloud & Blockchain for Precision Medicine',
  description: 'Leading cloud computing platform for precision medicine with blockchain integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter bg-dark-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
