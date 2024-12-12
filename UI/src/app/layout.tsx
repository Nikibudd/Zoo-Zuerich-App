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
      <body
        className={`antialiased min-h-screen bg-gradient-to-t from-primary-950  to-primary-900`}
      >
        {showFooter && pages.find((page) => page.link == currPage)?.page}
        {showFooter && <Footer elements={pages} setCurrPage={setCurrPage} currPage={currPage}/>}
        {!showFooter && children}
      </body>
    </html>
  );
}
