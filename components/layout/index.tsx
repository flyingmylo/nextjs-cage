import Header from "../header";
import Chat from "../chat";
import style from "./main.module.css";

interface props {
  children?: React.ReactNode;
}
const Layout = ({ children }: props) => {

  return (
    <div className={style.container}>

      {/* <Header /> */}

      <div className="content-wrapper">{children}</div>

      <Chat />
    </div>
  );

}

export default Layout;

