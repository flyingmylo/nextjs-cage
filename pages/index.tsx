import Head from "next/head"
import React, { useEffect } from "react"

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!

export default function Home() {
  const style: Style = {
    container: {
      margin: "0 auto",
      height: "600px",
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
        <title>h1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 style={style.title}>
          Welcome to <a href="#">flyingmylo</a>
        </h1>
        <div>
          <Wrapper>
            <Title>Hello World, this is my first styled component!</Title>
          </Wrapper>
        </div>
      </main>

      <footer></footer>
    </div>
  )

  type Style = {
    container: object
    title: object
  }
}
