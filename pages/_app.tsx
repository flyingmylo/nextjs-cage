// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// pages/_app.js
// import App from "next/app"
import "../styles/base.css"
import MainLayout from "../components/layout/main"
import { useEffect, useState } from 'react'
// class MyApp extends App {
//   const [mounted, setMounted] = useState(false)
//    useEffect(() => setMounted(true), [])
//   render() {
// 		const { Component, pageProps } = this.props

// 		return (
// 			<MainLayout>
// 				<div style={{ visibility: !mounted ? 'hidden' : '' }}><Component {...pageProps} /></div>
// 			</MainLayout>
// 		)
// 	}
// }
export default function App({ Component, pageProps }: any) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <MainLayout>
      <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}><Component {...pageProps} /></div>
    </MainLayout>
  )
}
// export default MyApp
