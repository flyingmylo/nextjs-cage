import Head from "next/head"

export default function Home() {
  const style: Style = {
    container: {
      margin: "0 auto",
      // height: "600px",
      display: "flex",
      flexDirection: "column",
      background: "#fafafa",
    },

    title: {
      color: "forestgreen",
    },
  }
  return (
    <div style={style.container}>
      <Head>
        <title>Butterfly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer></footer>
    </div>
  )

  type Style = {
    container: object
    title: object
  }
}
