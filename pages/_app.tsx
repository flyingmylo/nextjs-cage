
import "../styles/base.css"
import Layout from "../components/layout"


export default function App({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
