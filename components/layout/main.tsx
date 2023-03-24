import Header from "../header";
import Chat from "../chat";
import style from "./main.module.css";
import { useEffect, useState } from 'react'

interface props {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: props) => {
  const [mounted, setMounted] = useState(false)

  return (
    <div className={style.container}>

      <Header />

      <div className="content-wrapper">{children}</div>
      <Chat />
    </div>
  );

}

export default MainLayout;

