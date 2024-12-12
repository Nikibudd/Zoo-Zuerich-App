"use client"
import Footer from "@/components/Footer";
import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currPage, setCurrPage] = useState("/")
  const url = usePathname()
  const showFooter = url === "/"

  const pages = [
    {name: "Home", link: "/", page: <div>Home</div>},
    {name: "Tickets", link: "/tickets", page: <div>Tickets</div>},
    {name: "Map", link: "/map", page: <div>Map</div>}
  ]

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased min-h-screen bg-gradient-to-t from-primary-950 to-primary-900 font-sans`}
      >
        {showFooter && pages.find((page) => page.link == currPage)?.page}
        {showFooter && <Footer elements={pages} setCurrPage={setCurrPage} currPage={currPage}/>}
        {!showFooter && children}
      </body>
    </html>
  );
}