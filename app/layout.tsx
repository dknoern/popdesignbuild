import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pop Design',
  description: 'Home Staging and Interior Design',
  generator: 'SeattleWeb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
