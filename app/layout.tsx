import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "True Word One | South African Church Community",
  description:
    "True Word One is a Christ-centred community in South Africa. Join us for worship, prayer, and the teaching of God's true word.",
  keywords: ["church", "South Africa", "worship", "faith", "Christian", "True Word One"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
