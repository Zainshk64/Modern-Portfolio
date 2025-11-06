"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import LoadingScreen from "../components/loading-screen"
import ScrollToTop from '../components/scroll-totop'
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
      const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent flash of content
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);
  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <Navbar />
          <ScrollToTop />
          {children}
          <Footer/>
        </>
      )}
    </>
  )
}
